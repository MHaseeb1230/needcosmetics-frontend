import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Check } from 'lucide-react';
import { leadershipData } from '../data/leadershipData';

const LeadershipDetail = () => {
    const { slug } = useParams();
    const leader = leadershipData.find(l => l.slug === slug);

    if (!leader) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Leader not found</h2>
                    <Link to="/about/leadership" className="text-pink-600 hover:underline">Back to Leadership</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Sticky Navigation / Header */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                    <Link
                        to="/about/leadership"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ChevronLeft size={20} />
                        BACK TO LEADERSHIP
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column - Image */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 bg-[#F5F5F7] rounded-[2.5rem] overflow-hidden p-8 aspect-square flex items-center justify-center">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-7 pt-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            {leader.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium tracking-wide">
                            {leader.role}
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <div className="space-y-8">
                                {leader.bio.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-tight">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Our Promise Section (for Waqas) */}
                            {leader.promise && (
                                <div className="mt-16 pt-12 border-t border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">
                                        Our Promise
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {leader.promise.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                                    <Check size={18} strokeWidth={3} />
                                                </div>
                                                <span className="text-lg font-semibold text-gray-800 tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Signature */}
                            <div className="mt-16 pt-12 border-t border-gray-100 italic font-medium text-gray-500 text-xl">
                                {leader.signature}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipDetail;
