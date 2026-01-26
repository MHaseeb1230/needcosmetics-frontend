import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { API_BASE_URL } from '../config/api';

const SkinCareProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    // Helper function to format image URL
    const getImageUrl = (url) => {
        if (!url) return '';
        // If it's already a full URL (http/https) or data URI, return as is
        if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('/src/assets') || url.startsWith('/images/')) {
            return url;
        }
        // If it's a relative path from backend, prepend the backend base URL
        const baseUrl = API_BASE_URL.replace('/api', '');
        return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    return (
        <div className="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.25rem)] flex-shrink-0 flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-primary mb-4">
                <Link to={`/product/${product.slug || product.id}`}>
                    <img
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            // Prevent infinite loop - if already set to fallback, don't change again
                            if (!e.target.dataset.fallbackSet) {
                                e.target.dataset.fallbackSet = 'true';
                                // Use a simple data URI instead of external placeholder
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                            }
                        }}
                    />
                </Link>

                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-[#F8E0E0] text-[#1C1B1B] text-xs font-bold px-2 py-1">
                        -{discount}%
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow px-2 items-center text-center">
                {/* Description */}
                {product.description && (
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed text-center">
                        {product.description}
                    </p>
                )}

                {/* Product Name */}
                <Link to={`/product/${product.slug || product.id}`} className="text-center">
                    <h3 className="text-sm font-bold uppercase text-[#1C1B1B] mb-3 line-clamp-2 hover:text-primary transition-colors leading-tight">
                        {product.name}
                    </h3>
                </Link>

                {/* Price */}
                <div className="mb-3 text-center">
                    {product.originalPrice && product.originalPrice > product.price ? (
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-bold text-[#1C1B1B]">PKR {product.price.toLocaleString()}</span>
                            <span className="text-xs text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                        </div>
                    ) : (
                        <span className="text-sm font-bold text-[#1C1B1B]">PKR {product.price.toLocaleString()}</span>
                    )}
                </div>

                {/* Color Swatches */}
                {/* {product.swatches && product.swatches.length > 0 && (
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                        {product.swatches.slice(0, 4).map((color, idx) => (
                            <div
                                key={idx}
                                className={`w-4 h-4 rounded-full border ${
                                    idx === 0 ? 'border-[#1C1B1B] border-2' : 'border-gray-300'
                                }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                        {product.swatches.length > 4 && (
                            <span className="text-[10px] text-gray-500">+{product.swatches.length - 4}</span>
                        )}
                    </div>
                )} */}

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-auto w-full justify-center">
                    <button
                        onClick={() => !product.isSoldOut && addToCart(product)}
                        disabled={product.isSoldOut}
                        className={`flex-1 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-center relative overflow-hidden border-2 transition-all duration-300 ${
                            product.isSoldOut
                                ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                                : 'bg-[#1C1B1B] text-white border-[#1C1B1B] hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50'
                        }`}
                        onMouseEnter={(e) => {
                            if (!product.isSoldOut) {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.remove('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.add('text-black');
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!product.isSoldOut) {
                                e.currentTarget.querySelector('.button-slide-bg')?.classList.add('translate-y-full');
                                e.currentTarget.querySelector('.button-text')?.classList.remove('text-black');
                            }
                        }}
                    >
                        <span className="button-text relative z-10 transition-colors duration-300">{product.isSoldOut ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>
                        {!product.isSoldOut && (
                            <span className="button-slide-bg absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out z-0"></span>
                        )}
                    </button>
                    <button 
                        className="w-9 h-9 bg-white border border-gray-300 rounded flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                        aria-label="Add to wishlist"
                        onMouseEnter={(e) => {
                            const heartContainer = e.currentTarget.querySelector('.heart-container');
                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                            if (heartContainer && heartFill) {
                                heartFill.classList.remove('translate-y-full');
                            }
                        }}
                        onMouseLeave={(e) => {
                            const heartFill = e.currentTarget.querySelector('.heart-fill');
                            if (heartFill) {
                                heartFill.classList.add('translate-y-full');
                            }
                        }}
                    >
                        <div className="heart-container relative w-[18px] h-[18px] flex items-center justify-center overflow-hidden">
                            <Heart size={18} className="text-gray-600 absolute z-0" />
                            <div className="heart-fill absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out z-10">
                                <Heart size={18} className="text-black fill-black" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkinCareProductCard;

