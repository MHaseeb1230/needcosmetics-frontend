import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutTabs = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        { name: 'BRAND', path: '/about/our-brand' },
        { name: 'OUR IMPACT', path: '/about/our-impact' },
        { name: 'ANIMALS', path: '/about/animals' },
        { name: 'LEADERSHIP', path: '/about/leadership' },
        { name: 'GOVERNANCE', path: '/about/governance' },
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 my-8">
            {tabs.map((tab) => {
                const isActive = currentPath === tab.path;
                return (
                    <Link
                        key={tab.path}
                        to={tab.path}
                        className={`text-sm md:text-base font-normal uppercase tracking-wide transition-all ${isActive
                                ? 'text-gray-700 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-200 via-pink-100 to-purple-200 hover:from-pink-300 hover:via-pink-200 hover:to-purple-300'
                                : 'text-gray-700 hover:text-gray-900 transition-colors'
                            }`}
                    >
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default AboutTabs;
