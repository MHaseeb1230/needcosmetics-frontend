import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/productService';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import ProductSlider from '../components/ProductSlider';
// import SeasonSection from '../components/SeasonSection';
import FollowViralHypeSection from '../components/FollowViralHypeSection';
import OurServicesSection from '../components/OurServicesSection';
import OurBrandSection from '../components/OurBrandSection';
import TopCategoriesSection from '../components/TopCategoriesSection';
import ShopSkinCareSection from '../components/ShopSkinCareSection';
import IngredientsGlossarySection from '../components/IngredientsGlossarySection';
import MeetOurIconsSection from '../components/MeetOurIconsSection';
import WhatsNewSection from '../components/WhatsNewSection';
import CreateStyleSection from '../components/CreateStyleSection';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import mockData from '../data/mockData';

// Import hero images
import hero1 from '../assets/hero/hero1.jpg';
import hero3 from '../assets/hero/hero3.jpg';
import hero4 from '../assets/hero/hero4.jpg';
import hero5 from '../assets/hero/hero5.jpg';
import hero6 from '../assets/hero/Hero Image-1.jpg';
import hero7 from '../assets/hero/Hero Image.jpg';

// Import top categories images
import lipsImg from '../assets/topcategories/lips.avif';
import eyesImg from '../assets/topcategories/eyes.avif';
import faceImg from '../assets/topcategories/face.avif';
import skincareImg from '../assets/topcategories/skincare.avif';
import accessoriesImg from '../assets/topcategories/accessories.webp';

const heroImages = [
    // hero1,
    hero6,
    hero7,
    // hero5,
    // hero3,
    // hero4,

];

const Home = () => {
    const [flashSaleProducts, setFlashSaleProducts] = useState([]);
    const [mostLovedProducts, setMostLovedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                // Fetch all products
                const productsResponse = await productService.getProducts({ limit: 50 });
                const allProducts = productsResponse.success ? productsResponse.data.products : [];

                // Fetch categories
                const categoriesResponse = await productService.getCategories();
                const cats = categoriesResponse.success ? (categoriesResponse.data || []) : [];

                setCategories(cats);

                // Flash sale products (discount >= 50%)
                setFlashSaleProducts(allProducts.filter(p => p.discount >= 50));

                // Most loved products - sorted by subcategory order: sunscreen, toner, cleanser (Rice And Coconut), cream, serum
                // Define subcategory order
                const subcategoryOrder = ['suncare', 'toner', 'cleansing', 'moisturizer', 'serum'];

                const sortProductsBySubcategory = (products) => {
                    return products.sort((a, b) => {
                        const getSubcategoryPriority = (product) => {
                            // Check if subcategory matches order
                            // Handle both object format (from backend) and string format (from mockData)
                            const subcategoryValue = product.subcategory 
                                ? (typeof product.subcategory === 'string' 
                                    ? product.subcategory 
                                    : (product.subcategory.slug || product.subcategory.name || ''))
                                : '';
                            const subcategory = subcategoryValue.toLowerCase();
                            const name = (product.name || '').toLowerCase();

                            // Check for sunscreen first (can be in subcategory or name)
                            if (subcategory.includes('suncare') || name.includes('sunscreen') || name.includes('sun screen')) {
                                return 0;
                            }
                            // Check for toner
                            if (subcategory.includes('toner') || name.includes('toner')) {
                                return 1;
                            }
                            // Check for cleanser/cleansing (Rice And Coconut should be 3rd, right after toner)
                            if (subcategory.includes('cleansing') || name.includes('cleanser') || name.includes('cleansing')) {
                                // Special priority for Rice And Coconut Facial Cleanser - should be treated as toner (priority 1)
                                if (name.includes('rice') && name.includes('coconut')) {
                                    return 1; // 2nd position (after suncare=0, with toner=1)
                                }
                                return 2; // Other cleansers at priority 2
                            }
                            // Check for cream/moisturizer
                            if (subcategory.includes('moisturizer') || name.includes('cream') || name.includes('moisturizer')) {
                                return 3;
                            }
                            // Check for serum
                            if (subcategory.includes('serum') || name.includes('serum')) {
                                return 4;
                            }
                            // Everything else goes after
                            return 5;
                        };

                        const priorityA = getSubcategoryPriority(a);
                        const priorityB = getSubcategoryPriority(b);

                        if (priorityA !== priorityB) {
                            return priorityA - priorityB;
                        }

                        // If same priority (both cleansers), prioritize Rice And Coconut first
                        if (priorityA === 2) {
                            const nameA = (a.name || '').toLowerCase();
                            const nameB = (b.name || '').toLowerCase();
                            const hasRiceCoconutA = nameA.includes('rice') && nameA.includes('coconut');
                            const hasRiceCoconutB = nameB.includes('rice') && nameB.includes('coconut');

                            if (hasRiceCoconutA && !hasRiceCoconutB) return -1;
                            if (!hasRiceCoconutA && hasRiceCoconutB) return 1;
                        }

                        // If same priority, maintain original order
                        return 0;
                    });
                };

                if (allProducts.length > 0) {
                    const sortedProducts = sortProductsBySubcategory([...allProducts]);
                    setMostLovedProducts(sortedProducts.slice(0, 18));
                } else {
                    // Use mockData as fallback
                    const mockProducts = sortProductsBySubcategory([...mockData.products]);
                    setMostLovedProducts(mockProducts.slice(0, 18));
                }

            } catch (error) {
                console.error('Error fetching products:', error);
                // Use mockData as fallback when backend fails
                // Define subcategory order sorting function
                const sortProductsBySubcategory = (products) => {
                    return products.sort((a, b) => {
                        const getSubcategoryPriority = (product) => {
                            // Handle both object format (from backend) and string format (from mockData)
                            const subcategoryValue = product.subcategory 
                                ? (typeof product.subcategory === 'string' 
                                    ? product.subcategory 
                                    : (product.subcategory.slug || product.subcategory.name || ''))
                                : '';
                            const subcategory = subcategoryValue.toLowerCase();
                            const name = (product.name || '').toLowerCase();

                            if (subcategory.includes('suncare') || name.includes('sunscreen') || name.includes('sun screen')) {
                                return 0;
                            }
                            if (subcategory.includes('toner') || name.includes('toner')) {
                                return 1;
                            }
                            // Cleanser comes after toner (3rd position)
                            if (subcategory.includes('cleansing') || name.includes('cleanser') || name.includes('cleansing')) {
                                // Special priority for Rice And Coconut Facial Cleanser
                                if (name.includes('rice') && name.includes('coconut')) {
                                    return 1; // Treated as toner
                                }
                                return 2; // Other cleansers also at priority 2
                            }
                            if (subcategory.includes('moisturizer') || name.includes('cream') || name.includes('moisturizer')) {
                                return 3;
                            }
                            if (subcategory.includes('serum') || name.includes('serum')) {
                                return 4;
                            }
                            return 5;
                        };

                        const priorityA = getSubcategoryPriority(a);
                        const priorityB = getSubcategoryPriority(b);

                        if (priorityA !== priorityB) {
                            return priorityA - priorityB;
                        }

                        // If same priority (both cleansers), prioritize Rice And Coconut first
                        if (priorityA === 2) {
                            const nameA = (a.name || '').toLowerCase();
                            const nameB = (b.name || '').toLowerCase();
                            const hasRiceCoconutA = nameA.includes('rice') && nameA.includes('coconut');
                            const hasRiceCoconutB = nameB.includes('rice') && nameB.includes('coconut');

                            if (hasRiceCoconutA && !hasRiceCoconutB) return -1;
                            if (!hasRiceCoconutA && hasRiceCoconutB) return 1;
                        }

                        return 0;
                    });
                };

                const mockProducts = sortProductsBySubcategory([...mockData.products]);
                setMostLovedProducts(mockProducts.slice(0, 18));
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);


    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section Carousel */}
            <section className="relative h-[70vh] md:h-[80vh] lg:h-[95vh] overflow-hidden w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 w-full"
                    >
                        <img
                            src={heroImages[currentSlide]}
                            alt={`Hero ${currentSlide + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                >
                    <ChevronRight size={24} />
                </button>
            </section>

            {/* Needs Most Loved Section */}
            <ProductSlider
                title="POPULAR & TRENDING"
                products={mostLovedProducts}
                variant="card"
                showViewAll={true}
                viewAllLink="/category/makeup"
            />

            {/* Create Your Style Section */}
            <CreateStyleSection />

            {/* Categories */}
            {/* {categories.length > 0 && (
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold uppercase tracking-widest mb-10 text-center">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </section>
            )} */}

            {/* Ingredients Glossary Section */}
            <IngredientsGlossarySection />

            {/* Meet Our Icons Section */}
            <MeetOurIconsSection />

            {/* What's new Section */}
            <WhatsNewSection />

            {/* Follow the viral hype Section */}
            <FollowViralHypeSection />

            {/* Our Services Section */}
            <OurServicesSection />

            {/* Your Season Section */}
            {/* <SeasonSection /> */}

            {/* Flash Sale */}
            {flashSaleProducts.length > 0 && (
                <ProductSlider
                    title="Flash Sale"
                    products={flashSaleProducts}
                />
            )}

            {/* Top Categories and Shop Skin Care Section */}
            {/* <div className="bg-primary">
                <TopCategoriesSection />

                </div> */}
            <ShopSkinCareSection />


            {/* Our Brand Section - Above Footer */}
            <OurBrandSection />
        </div>
    );
};

export default Home;
