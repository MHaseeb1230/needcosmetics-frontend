import React, { useEffect } from 'react';
import AboutTabs from '../components/AboutTabs';

const OurBrand = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Our Brand
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 font-serif">
                            Nature · Beauty · Joy
                        </h2>
                        <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-800 mb-8 uppercase">
                            Need’s Organic is a USA-based brand dedicated to natural self-care and conscious living.
                        </h3>
                        <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-[15px] font-medium text-gray-700 leading-relaxed">
                            <p>
                                We create products that combine carefully selected natural ingredients with modern formulations to support healthy, radiant lifestyles.
                            </p>
                            <p>
                                Our mission is to make everyday routines feel pure, joyful, and effective. Each product is developed with high quality and safety standards, designed to be gentle on you and mindful of the environment.
                            </p>
                            <p>
                                Need’s Organic stands for clean beauty, trusted care, and confidence inspired by nature.
                            </p>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 d-flex items-center justify-center h-auto">
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/images/brand/brand1.png" alt="Model 1" className="item-center" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/images/brand/brand2.png" alt="Makeup 1" className="" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/images/brand/brand3.png" alt="Model 2" className="" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/images/brand/brand4.png" alt="Products" className="" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/images/brand/brand5.png" alt="Model 3" className="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section 1: Our Mission (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase font-serif">
                                    Our Mission
                                </h4>
                                <h2 className="text-3xl md:text-5xl  text-gray-900 leading-tight font-serif">
                                    We believe in the power of Nature, colour and craft to transform our customers' daily lives.
                                </h2>
                            </div>
                            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
                                <p>
                                Our mission is to promote natural beauty and everyday wellness through clean, effective personal care products. We create high-quality formulas with carefully selected ingredients to help people feel confident, healthy, and connected to nature.
                                    {/* We are committed to delivering the <span className="font-bold">Italian Art of Beauty</span> to people across the globe by creating, designing, and innovating high-quality beauty products that will help them express their personality. */}
                                </p>
                                <p>
                                We are committed to offering a caring, personalized experience that supports each individual’s unique self-care journey.
                                {/* We believe in the power of Nature, colour and craft to transform our customers' daily lives. */}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 h-auto">
                            <div className="flex-1 overflow-hidden relative">
                                <img
                                    src="/images/brand/brand6.png"
                                    alt="Mission Large"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        </div>
                    </div>

                    {/* Section 2: Quality (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex gap-4 h-auto order-2 lg:order-1">
                            <div className="flex-1  overflow-hidden relative">
                                <img
                                    src="/images/brand/brand7.png"
                                    alt="Quality Large"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight font-serif">
                            Need’s Organic is Nature
                            </h2>
                            <div className="space-y-6 text-gray-600 text-xs md:text-sm leading-relaxed">
                                <p>
                                We bring the power of natural ingredients and gentle formulations into everyday self-care, encouraging people to explore products that nurture their skin, uplift their senses, and inspire confidence in their natural beauty.

                                {/* Our products are made with carefully selected, high-quality ingredients that are safe for your skin and body. We use only natural and organic ingredients, and we never test on animals. */}
                                </p>
                                <p>
                                To stay innovative and inspired, we follow global wellness trends and collaborate with experts who share our passion for clean, effective, and mindful personal care — always guided by our commitment to quality, purity, and sustainability
                                    {/* <span className="font-bold">We use only safe ingredients,</span> rigorously avoiding any questionable or suspect raw materials. We avoid dubious substances such as preservatives, cyclic silicones, sulphates, parabens, microbeads, GMOs, potentially carcinogenic ingredients and endocrine disruptors, among others. */}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurBrand;
