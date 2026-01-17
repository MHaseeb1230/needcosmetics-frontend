import React from 'react';
import { Link } from 'react-router-dom';

const IngredientsGlossarySection = () => {
    return (
        <section className=" py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="/images/glossary/glossary.png"
                                alt="Ingredients Glossary"
                                className="h-full w-full object-cover rounded-lg shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col items-center  text-center lg:text-left order-1 lg:order-2">
                        {/* Main Title */}
                        <h2 className="text-4xl text-center md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-gray-900 mb-4 w-full">
                            Ingredients Glossary
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="text-sm md:text-base text-center font-light uppercase tracking-wider text-gray-600 mb-8 w-full">
                            BY NEEDS 
                        </p>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 mb-8 max-w-md leading-relaxed w-full">
                            Check out the NEEDS Ingredients Glossary: learn about the active ingredients we use and choose what's right for you.
                        </p>

                        {/* Button */}
                        <Link 
                            to="/glossary"
                            className="button-slide inline-block border-2 border-gray-900 bg-white text-gray-900 px-8 py-3 uppercase text-xs font-bold tracking-wider rounded relative overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.remove('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.add('text-white');
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.add('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.remove('text-white');
                            }}
                        >
                            <span className="button-text relative z-10 transition-colors duration-300">FIND OUT MORE</span>
                            <span className="button-slide-bg absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 ease-in-out z-0"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IngredientsGlossarySection;

