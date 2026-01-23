import React from 'react';
import { Link } from 'react-router-dom';
import AboutTabs from '../components/AboutTabs';
import { leadershipData } from '../data/leadershipData';

const Leadership = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Leadership
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            {/* Lead Team Title Section */}
            <section className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-tight">
                        Lead <span className="font-bold">Team</span>
                    </h2>
                </div>
            </section>

            {/* Leaders Grid */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12">
                    {leadershipData.map((leader) => (
                        <div
                            key={leader.id}
                            className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                        >
                            {/* Image Part */}
                            <div className="w-full md:w-[45%] lg:w-[40%] aspect-[4/3] md:aspect-auto bg-[#F5F5F7] overflow-hidden flex items-center justify-center p-4">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="flex-1 flex flex-col justify-center p-12 md:p-16 lg:p-20 text-center md:text-left">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                                    {leader.name}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium tracking-wide">
                                    {leader.role}
                                </p>
                                <div>
                                    <Link
                                        to={`/about/leadership/${leader.slug}`}
                                        className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-50 hover:shadow-md transition-all whitespace-nowrap"
                                    >
                                        READ MORE
                                        <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Leadership;
