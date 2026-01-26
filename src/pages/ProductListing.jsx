import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import mockData from '../data/mockData.js';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const ProductListing = () => {
    const { slug } = useParams();
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState(10000);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Category to subcategory mapping for navbar items
    const categoryMappings = {
        'creams': { category: 'skincare', subcategory: null, nameFilter: 'cream' }, // Creams - filter by name containing "cream"
        'serums': { category: 'skincare', subcategory: 'serum' }, // Serums
        'sunscreens': { category: 'skincare', subcategory: 'suncare' }, // SunScreens - filter by subcategory only
        'suncare': { category: 'skincare', subcategory: 'suncare' }, // Lotions (general suncare)
        'toner': { category: 'skincare', subcategory: 'toner' }, // Toners
        'face-wash': { category: 'skincare', subcategory: 'cleansing' }, // Face Wash
        // Fallback for other categories
        'makeup': { category: 'makeup', subcategory: null },
        'skincare': { category: 'skincare', subcategory: null },
        'accessories': { category: 'accessories', subcategory: null }
    };

    // Scroll to top when component mounts or category changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Fetch products from backend or use mockData
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const mapping = categoryMappings[slug];

                // Try to fetch from backend
                const response = await productService.getProducts({
                    category: mapping?.category || slug,
                    limit: 100
                });

                let fetchedProducts = response.success ? response.data.products : [];

                // Force "Rice and Coconut" into toner category
                fetchedProducts = fetchedProducts.map(p => {
                    if (p.name?.toLowerCase().includes('rice and coconut')) {
                        return {
                            ...p,
                            subcategory: p.subcategory && typeof p.subcategory === 'object'
                                ? { ...p.subcategory, name: 'toner', slug: 'toner' }
                                : 'toner'
                        };
                    }
                    return p;
                });

                // Apply subcategory filter if needed
                if (mapping?.subcategory) {
                    fetchedProducts = fetchedProducts.filter(p =>
                        p.subcategory?.slug === mapping.subcategory ||
                        p.subcategory?.name?.toLowerCase() === mapping.subcategory.toLowerCase() ||
                        p.subcategory === mapping.subcategory
                    );
                }

                // Special filter for name-based filters (Creams, SunScreens)
                if (mapping?.nameFilter) {
                    fetchedProducts = fetchedProducts.filter(p =>
                        p.name?.toLowerCase().includes(mapping.nameFilter.toLowerCase()) ||
                        p.subcategory?.toLowerCase().includes(mapping.nameFilter.toLowerCase()) ||
                        p.description?.toLowerCase().includes(mapping.nameFilter.toLowerCase())
                    );
                }

                if (fetchedProducts.length > 0) {
                    setProducts(fetchedProducts);
                } else {
                    // Use mockData as fallback
                    throw new Error('No products from backend');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                // Use mockData as fallback
                const mapping = categoryMappings[slug];
                let filteredProducts = mockData.products;

                // Filter by category
                if (mapping?.category) {
                    filteredProducts = filteredProducts.filter(p => p.category === mapping.category);
                } else {
                    filteredProducts = filteredProducts.filter(p => p.category === slug);
                }

                // Filter by subcategory if specified
                if (mapping?.subcategory) {
                    filteredProducts = filteredProducts.filter(p =>
                        p.subcategory === mapping.subcategory
                    );
                }

                // Special filter for name-based filters (Creams, Face Wash)
                if (mapping?.nameFilter) {
                    filteredProducts = filteredProducts.filter(p =>
                        p.name?.toLowerCase().includes(mapping.nameFilter.toLowerCase()) ||
                        p.subcategory?.toLowerCase().includes(mapping.nameFilter.toLowerCase()) ||
                        p.description?.toLowerCase().includes(mapping.nameFilter.toLowerCase())
                    );
                }

                console.log('Filtered products for', slug, ':', filteredProducts.length, filteredProducts);
                setProducts(filteredProducts);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProducts();
        }
    }, [slug]);

    const category = mockData.categories.find(c => c.id === slug || c.slug === slug);

    // Determine category title based on slug
    const getCategoryTitle = () => {
        const titleMap = {
            'creams': 'Creams',
            'serums': 'Serums',
            'sunscreens': 'Sunscreens',
            'suncare': 'Lotions',
            'toner': 'Toners',
            'face-wash': 'Face Wash'
        };
        return titleMap[slug] || category?.name || slug?.charAt(0).toUpperCase() + slug?.slice(1);
    };

    const categoryTitle = getCategoryTitle();

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Price filter
        filtered = filtered.filter(p => p.price <= priceRange);

        // Sort
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [products, sortBy, priceRange]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">{categoryTitle}</h1>
                <p className="text-gray-500">Showing {filteredProducts.length} products</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-32 space-y-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                <SlidersHorizontal size={18} /> Filters
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest mb-4 block">Price Range</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        step="500"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                        className="w-full accent-primary"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold mt-2">
                                        <span>PKR 0</span>
                                        <span>PKR {priceRange.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-grow">
                    <div className="flex justify-end mb-8">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-secondary pb-1">
                                Sort By: {sortBy} <ChevronDown size={14} />
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                <button onClick={() => setSortBy('featured')} className="w-full text-left px-4 py-2 text-[10px] font-bold uppercase hover:bg-accent">Featured</button>
                                <button onClick={() => setSortBy('price-low')} className="w-full text-left px-4 py-2 text-[10px] font-bold uppercase hover:bg-accent">Price: Low to High</button>
                                <button onClick={() => setSortBy('price-high')} className="w-full text-left px-4 py-2 text-[10px] font-bold uppercase hover:bg-accent">Price: High to Low</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 italic">No products found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
