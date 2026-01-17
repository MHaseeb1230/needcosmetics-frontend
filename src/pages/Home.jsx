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
    hero4,
   
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
                
                // Most loved products (first 18) - use backend if available, otherwise use mockData
                if (allProducts.length > 0) {
                    setMostLovedProducts(allProducts.slice(0, 18));
                } else {
                    // Use mockData as fallback
                    const mockProducts = mockData.products.slice(0, 18);
                    setMostLovedProducts(mockProducts);
                }
                
            } catch (error) {
                console.error('Error fetching products:', error);
                // Use mockData as fallback when backend fails
                const mockProducts = mockData.products.slice(0, 18);
                setMostLovedProducts(mockProducts);
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
            <div className="bg-primary">
                <TopCategoriesSection />

                </div>
                <ShopSkinCareSection />
           

            {/* Our Brand Section - Above Footer */}
            <OurBrandSection />
        </div>
    );
};

export default Home;
