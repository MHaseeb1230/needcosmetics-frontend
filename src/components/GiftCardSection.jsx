import React from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const GiftCardSection = () => {
    const { addToCart } = useCart();

    // Gift set products data
    const giftSet1 = {
        id: 'gift-set-1',
        name: 'Organic Glow Essentials Gift Set',
        slug: 'organic-glow-essentials-gift-set',
        price: 11499,
        originalPrice: 12499,
        image: '/images/gift/Gift-1.png',
        description: "This beautifully curated organic gift set is designed to nourish and revive your skin using pure, plant-based ingredients.",
    };

    const giftSet2 = {
        id: 'gift-set-2',
        name: 'Premium Organic Beauty Gift Set',
        slug: 'premium-organic-beauty-gift-set',
        price: 12499,
        originalPrice: 13499,
        image: '/images/gift/Gift-2.png',
        description: "This premium organic beauty gift set is thoughtfully crafted to protect, hydrate, and restore skin balance.",
    };
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* First Gift Set - Organic Glow Essentials */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-secondary">
                        Organic Glow Essentials
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Column - Image and Pricing */}
                        <div>
                            <div className="rounded-lg overflow-hidden mb-6">
                                <img
                                    src="/images/gift/Gift-1.png"
                                    alt="Organic Glow Essentials Gift Set"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="text-center lg:text-left space-y-4">
                                <div>
                                    <p className="text-lg md:text-xl mb-4">
                                        <span className="line-through text-gray-500 mr-2">Cut price: 12,499</span>
                                        <span className="font-bold text-secondary">Now: 11,499</span>
                                    </p>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => addToCart(giftSet1, 1)}
                                        className="flex-1 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-center relative overflow-hidden border-2 transition-all duration-300 bg-[#1C1B1B] text-white border-[#1C1B1B] hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
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
                                    <button 
                                        className="w-9 h-9 bg-white border border-gray-300 rounded flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                                        aria-label="Add to wishlist"
                                        onMouseEnter={(e) => {
                                            const heartContainer = e.currentTarget.querySelector('.heart-container');
                                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                                            if (heartContainer && heartFill) {
                                                heartFill.classList.remove('translate-y-full');
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                                            if (heartFill) {
                                                heartFill.classList.add('translate-y-full');
                                            }
                                        }}
                                    >
                                        <div className="heart-container relative w-[18px] h-[18px] flex items-center justify-center overflow-hidden">
                                            <Heart size={18} className="text-gray-600 absolute z-0" />
                                            <div className="heart-fill absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out z-10">
                                                <Heart size={18} className="text-black fill-black" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-secondary">
                                A Touch of Nature, A Glow to Remember
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                                This beautifully curated organic gift set is designed to nourish and revive your skin using <strong>pure, plant-based ingredients</strong>. Each product works gently to enhance your natural beauty, making it an ideal gift for someone who values elegance, care, and authenticity in their skincare routine.
                            </p>
                            <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>100% Organic & Chemical-Free</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Deep Nourishment for Healthy Skin</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Gentle on Sensitive Skin</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Suitable for Daily Use</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* How to Use Section */}
                    <div className=" flex ">
                        <div className='w-1/2'> </div>
                       <div className='w-1/2'>
                        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-secondary">
                            How to Use:
                        </h3>
                       
                        <div className="flex ">
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/01_orange.jpg"
                                        alt="Vitamin C Face Wash"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Cleanse your face with the Vitamin-C Face Wash.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/02_orange.jpg"
                                        alt="Serum"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Apply a few drops of Serum and gently massage until absorbed.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/01_cream_white.jpg"
                                        alt="Fairness Cream"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Finish by applying the Fairness Cream evenly on your face and neck.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Second Gift Set - Premium Organic Beauty */}
                <div className="border-t border-gray-200 pt-16 md:pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6 order-2 lg:order-1">
                            <h3 className="text-2xl md:text-3xl font-serif text-secondary">
                                Because Your Skin Deserves the Purest Care
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                                This premium organic beauty gift set is thoughtfully crafted to protect, hydrate, and restore skin balance. Free from harsh chemicals, it supports long-term skin health while delivering visible softness and radiance. A perfect blend of <strong>luxury, care, and conscious beauty</strong>—now available at a special gift price.
                            </p>
                            <ul className="space-y-3 text-base md:text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Natural Ingredients with Skin-Loving Benefits</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Helps Maintain Skin's Natural Balance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Safe, Clean & Eco-Friendly Formulation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-secondary">•</span>
                                    <span>Ideal for Gifting or Personal Use</span>
                                </li>
                            </ul>
                            <div className="pt-4 space-y-4">
                                <div>
                                    <p className="text-lg md:text-xl mb-4">
                                        <span className="line-through text-gray-500 mr-2">Cutprice: 13,499</span>
                                        <span className="font-bold text-secondary">Now: 12,499</span>
                                    </p>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => addToCart(giftSet2, 1)}
                                        className="flex-1 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-center relative overflow-hidden border-2 transition-all duration-300 bg-[#1C1B1B] text-white border-[#1C1B1B] hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
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
                                    <button 
                                        className="w-9 h-9 bg-white border border-gray-300 rounded flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                                        aria-label="Add to wishlist"
                                        onMouseEnter={(e) => {
                                            const heartContainer = e.currentTarget.querySelector('.heart-container');
                                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                                            if (heartContainer && heartFill) {
                                                heartFill.classList.remove('translate-y-full');
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                                            if (heartFill) {
                                                heartFill.classList.add('translate-y-full');
                                            }
                                        }}
                                    >
                                        <div className="heart-container relative w-[18px] h-[18px] flex items-center justify-center overflow-hidden">
                                            <Heart size={18} className="text-gray-600 absolute z-0" />
                                            <div className="heart-fill absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out z-10">
                                                <Heart size={18} className="text-black fill-black" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="order-1 lg:order-2">
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src="/images/gift/Gift-2.png"
                                    alt="Premium Organic Beauty Gift Set"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* How to Use Section */}
                    <div className=" flex ">
                        <div className='w-1/2'> </div>
                       <div className='w-1/2'>
                        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-secondary">
                            How to Use:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/01_blue.jpg"
                                        alt="Vitamin C Face Wash"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Cleanse your face with the Vitamin-C Face Wash.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/02_blue.jpg"
                                        alt="Serum"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Apply a few drops of Serum and gently massage until absorbed.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/products/01_black_cream.jpg"
                                        alt="Fairness Cream"
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                <p className="text-sm md:text-base text-gray-700">
                                    Finish by applying the Fairness Cream evenly on your face and neck.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftCardSection;
