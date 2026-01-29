import React, { useState, useEffect, useRef } from 'react';
import { Pause, Play } from 'lucide-react';

const MeetOurIconsSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const progressIntervalRef = useRef(null);

    const products = [
        {
            id: 1,
            title: "3D Hydra Skin toner",
            description: "A new frontier of radiance and comfort for your lips. A simply iconic and beautiful product that hydrates lips for up to 8h*, enveloping them in pure shine.",
            image: "/images/iconic/Meet our iconic (1).png",
            thumbnail: "/images/iconic/Meet our iconic (1).png",
            featureTag: "SUPER HIGH-SHINE"
        },
        {
            id: 2,
            title: "3D Hydra Skin toner",
            description: "A new frontier of radiance and comfort for your lips. A simply iconic and beautiful product that hydrates lips for up to 8h*, enveloping them in pure shine.",
            image: "/images/iconic/Meet our iconic (2).png",
            thumbnail: "/images/iconic/Meet our iconic (2).png",
            featureTag: "SUPER HIGH-SHINE"
        },
        {
            id: 3,
            title: "3D Hydra Skin toner",
            description: "A new frontier of radiance and comfort for your lips. A simply iconic and beautiful product that hydrates lips for up to 8h*, enveloping them in pure shine.",
            image: "/images/iconic/Meet our iconic (3).png",
            thumbnail: "/images/iconic/Meet our iconic (3).png",
            featureTag: "SUPER HIGH-SHINE"
        }
    ];

    const selectedProduct = products[selectedIndex];

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            // Progress animation (3 seconds per slide)
            progressIntervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        return 0;
                    }
                    return prev + 1; // Increase by 1% every 30ms (100 * 30ms = 3000ms = 3s)
                });
            }, 50);

            // Change slide every 5 seconds
            intervalRef.current = setInterval(() => {
                setSelectedIndex((prev) => (prev + 1) % products.length);
                setProgress(0);
            }, 5000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isPlaying, products.length]);

    // Reset progress when slide changes manually
    useEffect(() => {
        setProgress(0);
    }, [selectedIndex]);

    const handleThumbnailClick = (index) => {
        setSelectedIndex(index);
        setProgress(0);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className=" px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content and Thumbnails */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center lg:text-left">
                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-light text-gray-900 mb-6 leading-tight w-full">
                            MEET OUR ICONS
                        </h2>

                        {/* Thumbnail Slider */}
                        <div className="flex items-center justify-center gap-3 mb-6 relative">
                            {products.map((product, index) => (
                                <div key={product.id} className="relative flex items-center">
                                    <button
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all flex-shrink-0 ${
                                            selectedIndex === index
                                                ? 'border-pink-500 scale-110'
                                                : 'border-gray-300 hover:border-gray-500'
                                        }`}
                                        aria-label={`Select ${product.title}`}
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {selectedIndex === index && isPlaying && (
                                            <div className="absolute inset-0 bg-black/5"></div>
                                        )}
                                        {/* Progress line indicator */}
                                        {selectedIndex === index && (
                                            <div className="absolute inset-0 rounded-full">
                                                <svg className="w-full h-full transform -rotate-90">
                                                    <circle
                                                        cx="50%"
                                                        cy="50%"
                                                        r="48%"
                                                        fill="none"
                                                        stroke={`url(#gradient-${index})`}
                                                        strokeWidth="2"
                                                        strokeDasharray={`${2 * Math.PI * 48}`}
                                                        strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
                                                        className="transition-all duration-75"
                                                    />
                                                    <defs>
                                                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" stopColor="#EC4899" />
                                                            <stop offset="100%" stopColor="#F97316" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                    {/* Pause/Play button for active thumbnail */}
                                    {selectedIndex === index && (
                                        <button
                                            onClick={togglePlayPause}
                                            className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform z-10"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? (
                                                <Pause size={10} fill="white" />
                                            ) : (
                                                <Play size={10} fill="white" className="ml-0.5" />
                                            )}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Product Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-light text-gray-900 mb-4 w-full">
                            {selectedProduct.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 mb-6 max-w-md text-center leading-relaxed w-full">
                            {selectedProduct.description}
                        </p>

                        {/* Feature Tag/Button */}
                        <div className="w-full flex justify-center">
                            <span className="inline-block border-2 border-gray-900 bg-white text-gray-900 px-6 py-3 uppercase text-xs font-bold tracking-wider rounded">
                                {selectedProduct.featureTag}
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Main Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative w-full overflow-hidden bg-gray-50">
                            <img
                                key={selectedIndex}
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetOurIconsSection;

