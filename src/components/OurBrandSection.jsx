import React, { useState } from 'react';
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const OurBrandSection = () => {
    const [activeTab, setActiveTab] = useState('brand');

    const tabData = {
        brand: {
            badge: 'OUR BRAND',
            image: '/images/artbeauty.png',
            description: "Need's Organics is a brand built for self-expression. We capture global trends and infuse them with our own distinctive style drawn from our Italian perspective before sharing them with our audience across the world. We encourage people to embrace the things that make them unique and use our products to feel joyful and confident, experimenting with colour, texture and technique to bring their own individuality to life.",
        },
        impact: {
            badge: 'OUR IMPACT',
            image: '/images/our-impact/impact2.jpeg',
            description: 'NEEDS is committed to making a positive impact. We believe in sustainable beauty practices, ethical sourcing, and creating products that not only enhance your beauty but also contribute to a better world for everyone.',
        },
        animals: {
            badge: 'ANIMALS',
            image: '/images/animal.webp',
            description: 'NEEDS is proud to be cruelty-free. We are committed to never testing on animals and ensuring that all our products are developed with respect for all living beings, creating beauty that is kind and compassionate.',
        },
    };

    const currentData = tabData[activeTab];

    return (
        <section className="bg-white py-12 md:py-16 shadow-md mb-[1px]">
            <div className="container mx-auto px-4">
                {/* Main Content - Image and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left Side - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={currentData.image}
                                alt={currentData.badge}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to artbeauty.png if image doesn't exist
                                    e.target.src = '/images/artbeauty.png';
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        {/* Tab Navigation Badges */}
                        <div className="flex items-center gap-4 mb-6">
                            <button
                                onClick={() => setActiveTab('brand')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'brand'
                                    ? 'bg-[#FDE7F3] text-secondary'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                OUR BRAND
                            </button>
                            <button
                                onClick={() => setActiveTab('impact')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'impact'
                                    ? 'bg-[#FDE7F3] text-secondary'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                OUR IMPACT
                            </button>
                            <button
                                onClick={() => setActiveTab('animals')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'animals'
                                    ? 'bg-[#FDE7F3] text-secondary'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                ANIMALS
                            </button>
                        </div>

                        {/* Active Badge Display */}
                        {/* <div className="mb-6">
                            <span className="inline-block bg-[#FDE7F3] text-secondary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                                {currentData.badge}
                            </span>
                        </div> */}

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                            Nature · Beauty · Joy
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg mb-4">
                            {currentData.description}
                        </p>

                        {/* Read More Link */}
                        <button className="text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-gray-700 transition-colors text-left">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Free Shipping */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Truck size={32} className="text-secondary" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
                            FREE SHIPPING FOR ORDERS OVER 5000PKR
                        </h4>
                    </div>

                    {/* Secure Payments */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <ShieldCheck size={32} className="text-secondary" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
                            SECURE PAYMENTS PURCHASES ARE SECURE AND GUARANTEED
                        </h4>
                    </div>

                    {/* Easy Exchange */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <RotateCcw size={32} className="text-secondary" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
                            EASY EXCHANGE UP TO 3 DAYS AFTER ORDER DELIVERY
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBrandSection;
