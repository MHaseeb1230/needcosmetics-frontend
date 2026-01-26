import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import { API_BASE_URL } from '../config/api';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import ProductCard from '../components/ProductCard';
import { Heart, Share2, ShieldCheck, Truck, RotateCcw, Package, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import mockData from '../data/mockData';

const ProductDetail = () => {
    const { slug } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSwatch, setSelectedSwatch] = useState(null);
    const [activeTab, setActiveTab] = useState('description');
    const [selectedImage, setSelectedImage] = useState(0);

    // Helper function to format image URL
    const getImageUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('/src/assets') || url.startsWith('/images/')) {
            return url;
        }
        // If it's a relative path from backend (e.g. /uploads/...), prepend the backend base URL
        const baseUrl = API_BASE_URL.replace('/api', '');
        return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    // Fetch product from backend
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await productService.getProductBySlug(slug);
                if (response.success) {
                    setProduct(response.data);
                    setSelectedSwatch(response.data.swatches?.[0]);

                    // Fetch related products
                    const relatedResponse = await productService.getProducts({
                        category: response.data.category?.slug,
                        limit: 5
                    });
                    if (relatedResponse.success) {
                        setRelatedProducts(
                            relatedResponse.data.products
                                .filter(p => p.id !== response.data.id)
                                .slice(0, 4)
                        );
                    }
                } else {
                    // Fallback to mockData
                    throw new Error('Backend response not successful');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                // Use mockData as fallback
                if (slug) {
                    // Try to find product in mockData by slug or id
                    const mockProduct = mockData.products.find(p =>
                        p.slug === slug ||
                        p.id === parseInt(slug) ||
                        p.id.toString() === slug
                    );

                    if (mockProduct) {
                        setProduct(mockProduct);
                        setSelectedSwatch(mockProduct.swatches?.[0]);

                        // Set related products from mockData (same category)
                        const related = mockData.products
                            .filter(p =>
                                (p.category === mockProduct.category ||
                                    p.category?.slug === mockProduct.category?.slug) &&
                                p.id !== mockProduct.id
                            )
                            .slice(0, 4);
                        setRelatedProducts(related);
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProduct();
        }
    }, [slug]);

    // Scroll to top when component mounts or product changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
    }

    if (!product) {
        return <div className="container mx-auto px-4 py-20 text-center">Product not found</div>;
    }

    const tabs = [
        { id: 'description', label: 'DESCRIPTION' },
        { id: 'results', label: 'RESULTS' },
        { id: 'advice', label: 'ADVICE' },
        { id: 'ingredients', label: 'INGREDIENTS' },
        { id: 'reviews', label: 'REVIEWS' }
    ];

    return (
        <div className="bg-[var(--color-bg-light)] min-h-screen">
            {/* Top Section - Product Details */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left - Product Title & Thumbnails */}
                    <div className='flex justify-center items-center lg:col-span-3'>
                        <div className="lg:col-span-3 order-1 gap-4">
                            <h1 className="text-3xl lg:text-4xl font-light mb-8 leading-tight">
                                {product.name}
                            </h1>

                            {/* Thumbnail Images */}
                            <div className="flex flex-row lg:flex-col gap-4 mt-4 lg:mt-0">
                                {(product.images && product.images.length > 0 ? product.images : [product.image]).map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-secondary' : 'border-transparent'
                                            }`}
                                    >
                                        <img
                                            src={getImageUrl(img)}
                                            alt={`${product.name} ${i + 1}`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                // Prevent infinite loop
                                                if (!e.target.dataset.fallbackSet) {
                                                    e.target.dataset.fallbackSet = 'true';
                                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                                                }
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Center - Main Product Image */}
                    <div className="lg:col-span-5 order-2 lg:order-2">
                        <div className="aspect-square bg-white flex items-center justify-center overflow-hidden rounded-2xl border border-gray-100">
                            <img
                                src={getImageUrl(product.images && product.images.length > 0 ? product.images[selectedImage] : product.image)}
                                alt={product.name}
                                className="w-full h-full object-contain transition-all duration-500"
                                onError={(e) => {
                                    // Prevent infinite loop
                                    if (!e.target.dataset.fallbackSet) {
                                        e.target.dataset.fallbackSet = 'true';
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Product Info & Purchase */}
                    <div className="lg:col-span-4 order-3 bg-white rounded-2xl p-6 lg:p-8 h-fit sticky top-4">
                        {/* Reviews Section */}
                        <div className="mb-6 pb-6 border-b border-[var(--color-border)]">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-secondary">Customer Reviews</h3>
                                <span className="text-sm text-[var(--color-text-secondary)]">
                                    {product.reviews?.length || 1} Review{product.reviews?.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            {/* Dummy review or actual reviews */}
                            {(() => {
                                const reviewsToShow = product.reviews && product.reviews.length > 0
                                    ? product.reviews
                                    : [{
                                        name: "Customer",
                                        rating: 5,
                                        comment: "Great product! Highly satisfied with the quality and results. Would definitely recommend to others.",
                                        date: "Recently",
                                        verified: false
                                    }];

                                const averageRating = product.reviews && product.reviews.length > 0
                                    ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
                                    : "5.0";

                                return (
                                    <>
                                        {/* Average Rating */}
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                                    ))}
                                                </div>
                                                <span className="text-sm font-semibold">
                                                    {averageRating}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Recent Reviews */}
                                        {/* <div className="space-y-4 max-h-64 overflow-y-auto">
                                            {reviewsToShow.slice(0, 2).map((review, idx) => (
                                                <div key={idx} className="border-b border-[var(--color-border)] pb-3 last:border-0">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="flex items-center">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className={`text-sm ${
                                                                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                                    }`}
                                                                >
                                                                    ★
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-[var(--color-text-secondary)]">
                                                            {review.date}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm font-semibold mb-1">{review.name}</p>
                                                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            ))}
                                        </div> */}
                                    </>
                                );
                            })()}

                            <button
                                onClick={() => setActiveTab('reviews')}
                                className="text-xs text-secondary hover:text-secondary pointer underline mt-3"
                            >
                                View All Reviews
                            </button>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-bold text-secondary">
                                    PKR {product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-lg text-[var(--color-text-light)] line-through">
                                        PKR {product.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>

                            {/* Payment Options */}
                            <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded text-xs font-semibold inline-flex items-center gap-2">
                                <span>💳</span>
                                Top Rated Seller Product
                            </div>
                        </div>

                        {/* Add to Bag Button */}
                        <div className='flex justify-between items-center gap-5'>
                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="w-full bg-secondary text-white py-[13px] rounded-lg font-bold uppercase tracking-wider relative overflow-hidden border-2 border-secondary transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('.button-slide-bg')?.classList.remove('translate-y-full');
                                    e.currentTarget.querySelector('.button-text')?.classList.add('text-black');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('.button-slide-bg')?.classList.add('translate-y-full');
                                    e.currentTarget.querySelector('.button-text')?.classList.remove('text-black');
                                }}
                            >
                                <span className="button-text relative z-10 transition-colors duration-300">ADD TO BAG</span>
                                <span className="button-slide-bg absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out z-0"></span>
                            </button>

                            {/* Wishlist Button */}

                            <button className="w-20 border-2 border-[var(--color-border)] py-3 rounded-lg hover:border-primary transition-colors flex items-center justify-center gap-2">
                                <Heart size={20} />
                            </button>
                        </div>
                        {/* Store Availability */}
                        <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                            <button className="w-full text-left text-sm font-semibold text-secondary hover:text-primary transition-colors flex justify-between items-center">
                                <span>STORE AVAILABILITY</span>
                                <span className="text-xs underline">Change store</span>
                            </button>
                            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
                                Check if this product is available in your favourite store
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='text-5xl col-span-3 hidden lg:block'>
                    <div className='container text-right pr-2'>{product.name}</div>
                </div>
                <div className="container col-span-8 px-4">
                    {/* Tab Headers */}
                    <div className="border-b border-[var(--color-border)]">
                        <div className="flex gap-8 overflow-x-auto ">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activeTab === tab.id
                                            ? 'text-secondary border-b-2 border-secondary'
                                            : 'text-[var(--color-text-secondary)] hover:text-secondary'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="py-6">
                        <div className="max-w-4xl">
                            {activeTab === 'description' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-light mb-6">
                                        {product.name}
                                    </h2>
                                    <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                        {product.description}
                                    </p>

                                    {/* Product Features */}
                                    {product.features && product.features.length > 0 && (
                                        <div className="space-y-4 mt-8">
                                            {product.features.map((feature, index) => (
                                                <div key={index} className="space-y-2">
                                                    <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                                        <strong className="text-secondary">{feature.title}:</strong> {feature.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {product.spf && (
                                        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                            <strong className="text-secondary">Sun Protection:</strong> {product.spf}
                                        </p>
                                    )}
                                </div>
                            )}

                            {activeTab === 'ingredients' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold uppercase tracking-wider text-secondary mb-6">
                                        Key Ingredients
                                    </h2>
                                    {product.keyIngredients && product.keyIngredients.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {product.keyIngredients.map((ingredient, index) => {
                                                const ingredientName = typeof ingredient === 'string' ? ingredient : ingredient.name;
                                                const ingredientBenefit = typeof ingredient === 'object' && ingredient.benefit ? ingredient.benefit : null;
                                                return (
                                                    <div key={index} className="flex items-start gap-3 p-4 bg-pink-light rounded-lg">
                                                        <span className="text-primary font-bold">•</span>
                                                        <div className="flex-1">
                                                            <p className="text-sm text-secondary font-medium mb-1">{ingredientName}</p>
                                                            {ingredientBenefit && (
                                                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{ingredientBenefit}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-[var(--color-text-secondary)]">No ingredient information available.</p>
                                    )}
                                </div>
                            )}

                            {activeTab === 'results' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold uppercase tracking-wider text-secondary mb-6">
                                        Results
                                    </h2>
                                    <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                        Experience visible results with regular use. This product is dermatologically tested and suitable for daily application.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'advice' && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold uppercase tracking-wider text-secondary mb-6">
                                        How to Use
                                    </h2>
                                    <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                        Apply evenly to face and neck. For best results, use daily as part of your skincare routine.
                                    </p>
                                    {product.spf && (
                                        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                            <strong>Sun Protection:</strong> Reapply every 2 hours when exposed to direct sunlight for optimal protection.
                                        </p>
                                    )}
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="space-y-6">
                                    {(() => {
                                        const reviewsToShow = product.reviews && product.reviews.length > 0
                                            ? product.reviews
                                            : [{
                                                name: "Customer",
                                                rating: 5,
                                                comment: "Great product! Highly satisfied with the quality and results. Would definitely recommend to others.",
                                                date: "Recently",
                                                verified: false
                                            }];

                                        const averageRating = product.reviews && product.reviews.length > 0
                                            ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
                                            : "5.0";

                                        const reviewCount = product.reviews?.length || 1;

                                        return (
                                            <>
                                                <div className="flex items-center justify-between mb-6">
                                                    <h2 className="text-2xl font-bold uppercase tracking-wider text-secondary">
                                                        Customer Reviews
                                                    </h2>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i} className="text-yellow-400 text-xl">★</span>
                                                            ))}
                                                        </div>
                                                        <span className="text-lg font-semibold">
                                                            {averageRating}
                                                        </span>
                                                        <span className="text-sm text-[var(--color-text-secondary)]">
                                                            ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    {reviewsToShow.map((review, idx) => (
                                                        <div key={idx} className="border-b border-[var(--color-border)] pb-6 last:border-0">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div>
                                                                    <p className="text-base font-semibold mb-1">{review.name}</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex items-center">
                                                                            {[...Array(5)].map((_, i) => (
                                                                                <span
                                                                                    key={i}
                                                                                    className={`text-base ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                                                        }`}
                                                                                >
                                                                                    ★
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                        <span className="text-xs text-[var(--color-text-secondary)]">
                                                                            {review.date}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                                {review.comment}
                                                            </p>
                                                            {review.verified && (
                                                                <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                                                                    <ShieldCheck size={14} />
                                                                    <span>Verified Purchase</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Specifications */}
            <div className="grid lg:grid-cols-12 bg-[var(--color-bg-light)] py-12">
                <div className='col-span-3 hidden lg:block'>
                    <div className='container text-right pr-2'></div>
                </div>
                <div className=" lg:col-span-8">
                    <div className="max-w-4xl grid grid-cols-3 gap-4 md:gap-8">
                        {product.volume && (
                            <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                                <Package size={24} className="text-secondary md:w-8 md:h-8" />
                                <p className="text-xs md:text-lg font-bold text-secondary">{product.volume}</p>
                            </div>
                        )}
                        <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                            <MapPin size={24} className="text-secondary md:w-8 md:h-8" />
                            <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-secondary">MADE IN USA</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                            <Calendar size={24} className="text-secondary md:w-8 md:h-8" />
                            <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-secondary">12 MONTHS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* You might also like Section */}
            <div className="bg-[var(--color-bg-light)] py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-light uppercase tracking-widest text-center mb-8 md:mb-12">
                        You might also like
                    </h2>

                    {/* Products Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts && relatedProducts.length > 0 ? (
                                relatedProducts.map(relatedProduct => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                                ))
                            ) : (
                                <p className="col-span-4 text-center text-gray-500">No related products available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
