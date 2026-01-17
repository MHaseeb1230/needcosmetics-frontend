import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import sunKiss from '../assets/createstyle/SunKiss.png';
import serum from '../assets/createstyle/Serum.png';
import fairnessNightCream from '../assets/createstyle/FairnessNightCream.png';

const CreateStyleSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const progressIntervalRef = useRef(null);

    const products = [
        {
            id: 1,
            title: "New Unlimited Routine",
            description: "Foundation that lasts up to 24 hours* for a flawless base",
            image: sunKiss,
            thumbnail: sunKiss,
            link: "/category/skincare"
        },
        {
            id: 2,
            title: "Hydrating Serum Collection",
            description: "Intensive hydration for radiant, glowing skin",
            image: serum,
            thumbnail: serum,
            link: "/category/skincare"
        },
        {
            id: 3,
            title: "Fairness Night Cream",
            description: "Overnight treatment for brighter, even-toned skin",
            image: fairnessNightCream,
            thumbnail: fairnessNightCream,
            link: "/category/skincare"
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

            // Change slide every 3 seconds
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
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content and Thumbnails */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center">
                        {/* Main Title */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-6 leading-tight">
                            CREATE YOUR STYLE WITH NEED'S TOP PRODUCTS!
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
                        <h3 className="text-lg md:text-xl font-light text-gray-900 mb-3">
                            {selectedProduct.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                            {selectedProduct.description}
                        </p>

                      

                        {/* Shop Now Button */}
                        <Link
                            to={selectedProduct.link}
                            className="button-slide inline-block bg-white rounded-lg border-2 border-gray-900 text-gray-900 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider w-fit relative overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50"
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.remove('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.add('text-white');
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.add('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.remove('text-white');
                            }}
                        >
                            <span className="button-text relative z-10 transition-colors duration-300">SHOP NOW</span>
                            <span className="button-slide-bg absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 ease-in-out z-0"></span>
                        </Link>
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

export default CreateStyleSection;

