import React from 'react';
import { Link } from 'react-router-dom';

const OurServicesSection = () => {
    const services = [
        {
            id: 1,
            image: '/images/service/service1.png',
            title: 'Your Skin\'s Best Friend',
            description: 'Protect, Nourish, and Glow Naturally with Every Sun-Kissed Moment',
            buttonText: 'UNLOCK YOUR CREATIVITY',
            link: '/try-on'
        },
        {
            id: 2,
            image: '/images/service/service2.png',
            title: 'Radiance & Care in Every Drop',
            description: 'Target Acne, Brighten Skin, and Reveal Your Natural Glow with Our Powerful Organic Serums',
            buttonText: 'DISCOVER OUR SERVICES',
            link: '/beauty-services'
        },
        {
            id: 3,
            image: '/images/service/service3.png',
            title: 'Pure Hydration, Naturally',
            description: 'Cleanse, Refresh, and Nourish Your Skin with Organic Rice & Coconut, and Reveal a Glass-Like Glow with Our Hydrating Toner',
            buttonText: 'FIND MY SHADE PRECISELY',
            link: '/foundation-finder'
        },
        {
            id: 4,
            image: '/images/service/service4.png',
            title: 'Day & Night Care, Naturally',
            description: 'Brighten and Protect Your Skin During the Day with Vitamin C, and Nourish & Restore Overnight with Our Fairness Night Cream',
            buttonText: 'DEFINE YOUR ROUTINE',
            link: '/skincare-advisor'
        }
    ];

    return (
        <section className="bg-brand-primary py-12 md:py-20 ">
            <div className=" px-4">
                {/* Main Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-gray-900">
                        <span className="text-gray-600">Our</span>{' '}
                        <span className="font-semibold text-gray-900">services</span>{' '}
                        <span className="text-gray-600">for you</span>
                    </h2>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col rounded-lg overflow-hidden transition-shadow duration-300 h-full"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden flex justify-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6 md:p-8 items-center text-center">
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Button - pushed to bottom */}
                                <div className="mt-auto flex justify-center">
                                    <Link
                                        to={service.link}
                                        className="button-slide w-max inline-block border-2 border-gray-900 bg-white text-gray-900 px-6 py-3 uppercase text-xs font-bold tracking-wider rounded relative overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.querySelector('.button-slide-bg')?.classList.remove('translate-y-full');
                                            e.currentTarget.querySelector('.button-text')?.classList.add('text-white');
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.querySelector('.button-slide-bg')?.classList.add('translate-y-full');
                                            e.currentTarget.querySelector('.button-text')?.classList.remove('text-white');
                                        }}
                                    >
                                        <span className="button-text relative z-10 transition-colors duration-300">{service.buttonText}</span>
                                        <span className="button-slide-bg absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 ease-in-out z-0"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServicesSection;

