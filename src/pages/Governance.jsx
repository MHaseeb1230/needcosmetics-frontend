import React from 'react';
import AboutTabs from '../components/AboutTabs';

const Governance = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Governance
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-6">
                        Our Governance
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We are committed to governing with integrity, transparency and innovation.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Governance;
