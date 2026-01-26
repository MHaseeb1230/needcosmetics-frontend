import React from 'react';

const GiftCardSection = () => {
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
                            <div className="text-center lg:text-left">
                                <p className="text-lg md:text-xl">
                                    <span className="line-through text-gray-500 mr-2">Cut price: 12,499</span>
                                    <span className="font-bold text-secondary">Now: 11,499</span>
                                </p>
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
                            <div className="pt-4">
                                <p className="text-lg md:text-xl">
                                    <span className="line-through text-gray-500 mr-2">Cutprice: 13,499</span>
                                    <span className="font-bold text-secondary">Now: 12,499</span>
                                </p>
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
