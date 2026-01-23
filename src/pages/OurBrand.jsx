import React from 'react';
import AboutTabs from '../components/AboutTabs';

const OurBrand = () => {
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

            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Art Beauty Joy Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Art · Beauty · Joy
                            </h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Need's Organics is a brand built for self-expression.
                                </p>
                                <p>
                                    We capture global trends and infuse them with our own distinctive style drawn from our Italian perspective before sharing them with our audience across the world. We encourage people to embrace the things that make them unique and use our products to feel joyful and confident, experimenting with colour, texture and technique to bring their own individuality to life.
                                </p>
                                <p>
                                    Our products are all designed in Milano, with 99% of products produced in Europe to the highest quality standards. This consistent pursuit of excellence paired with a wide range of 1,200 products in a vast array of shades makes us the Italy’s leading beauty brand, with a prestigious reputation across Europe.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-pink-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop"
                                    alt="Art Beauty Joy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute -inset-4 bg-purple-100 rounded-3xl transform -rotate-2 group-hover:-rotate-1 transition-transform"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1596462502278-27bfad450216?w=800&h=1000&fit=crop"
                                    alt="Our Mission"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Our Mission
                            </h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                                <p className="font-medium text-pink-600">
                                    We believe in the power of art, colour and craft to transform our customers’ daily lives.
                                </p>
                                <p>
                                    We are committed to delivering the Italian Art of Beauty to people across the globe by creating, designing, and innovating high-quality beauty products that will help them express their personality.
                                </p>
                                <p>
                                    This commitment extends to the sales experience through the expertise and passion of our highly trained Beauty Advisors, who provide a personalised service that will relate to each customer’s own needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Colour Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Need's Organics is Colour
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We bring the largest colour assortment in the world of beauty to the lives of our customers encouraging them to experiment with products and shades that ignite creativity, confidence and self expression. To ensure we continuously push boundaries and stay inspired, we partner with global icons in fashion and the arts, sharing inspiration and offering our own Italian touch to their collaborations.
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=1000&fit=crop"
                                    alt="Need's Organics is Colour"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quality Section */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-[3rem] p-12 md:p-16 lg:p-20 text-center shadow-inner">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                            Need's Organics Cares about Quality
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                                At Need's Organics, your health and wellbeing is our utmost priority. We ensure that all our products are crafted with the highest standards of quality and safety, leaving no room for compromise. This means:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-pink-600 font-bold">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Safe Ingredients</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">We use only safe ingredients, rigorously avoiding questionable materials like sulfates, parabens, and microbeads.</p>
                                </div>
                                <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-purple-600 font-bold">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Rigorous Testing</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Exceeding 20,000 tests annually to ensure every product meets our strict safety and performance standards.</p>
                                </div>
                                <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-blue-600 font-bold">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Optimal Efficacy</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Perfectly balanced formulations that guarantee capacity to nourish and deliver real results for your skin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurBrand;
