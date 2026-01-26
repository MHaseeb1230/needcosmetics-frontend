import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    // Generate rating and reviews if not present (using product ID as seed for consistency)
    const seed = product.id || 0;
    const stableRating = product.rating || (4 + (seed % 10) / 10).toFixed(1); // Between 4.0-4.9
    // Handle reviews - can be an array or a number
    const stableReviews = Array.isArray(product.reviews) 
        ? product.reviews.length 
        : (product.reviews || (20 + (seed % 900))); // Between 20-920
    const rating = stableRating;
    const reviews = stableReviews;
    const numShades = product.swatches?.length || 0;

    const renderStars = (rating) => {
        // Validate and clamp rating to valid range (0-5)
        const numRating = Math.max(0, Math.min(5, parseFloat(rating) || 0));
        const fullStars = Math.max(0, Math.min(5, Math.floor(numRating)));
        const hasHalfStar = numRating % 1 >= 0.5;
        const emptyStars = Math.max(0, Math.min(5, 5 - fullStars - (hasHalfStar ? 1 : 0)));
        
        return (
            <div className="flex items-center gap-0.5">
                {[...Array(Math.max(0, fullStars))].map((_, i) => (
                    <Star key={i} size={12} className="fill-black text-black" strokeWidth={0} />
                ))}
                {hasHalfStar && (
                    <div className="relative w-3 h-3">
                        <Star size={12} className="absolute fill-transparent text-black" strokeWidth={1} />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star size={12} className="fill-black text-black" strokeWidth={0} />
                        </div>
                    </div>
                )}
                {[...Array(Math.max(0, emptyStars))].map((_, i) => (
                    <Star key={`empty-${i}`} size={12} className="fill-transparent text-black" strokeWidth={1} />
                ))}
            </div>
        );
    };

    return (
        <div className="group relative bg-white">
            {/* Discount Badge */}
            {/* {discount > 0 && (
                <div className="absolute top-3 left-3 bg-pink-300 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    -{discount}%
                </div>
            )} */}

            {/* Wishlist Button */}
            {/* <button className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                <Heart size={18} className="text-gray-600" />
            </button> */}

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
                <Link to={`/product/${product.slug || product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {product.isSoldOut && (
                    <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-900">Sold out</span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col items-center text-center">
                {/* Description */}
                {product.description && (
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2 min-h-[32px] leading-relaxed text-center">
                        {product.description}
                    </p>
                )}

                {/* Product Name */}
                <Link to={`/product/${product.slug || product.id}`} className="text-center">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-1 hover:text-pink-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Star Rating with Review Count */}
                <div className="flex items-center justify-center gap-2 mb-2">
                    {renderStars(parseFloat(rating))}
                    <span className="text-xs text-gray-600">
                        ({reviews})
                    </span>
                </div>

                {/* Price */}
                <div className="mb-3 text-center">
                    <span className="text-base font-bold text-gray-900">
                        PKR {product.price?.toLocaleString() || '0'}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                            PKR {product.originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* Shades Available */}
                {/* {numShades > 0 && (
                    <p className="text-xs text-gray-600 mb-4 text-center border-1 border-gray-200 px-2  p-[2px] rounded-full">
                        {numShades} {numShades === 1 ? 'shade' : 'shades'} available
                    </p>
                )} */}

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-auto w-full justify-center">
                    <button
                        onClick={() => addToCart(product, 1)}
                        disabled={product.isSoldOut}
                        className={`w-1/2 py-2.5 text-xs font-bold rounded-lg uppercase tracking-wider text-center relative overflow-hidden border-2 transition-all duration-300 ${
                            product.isSoldOut
                                ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                                : 'bg-gray-800 text-white border-gray-800 hover:border-transparent hover:shadow-lg hover:shadow-gray-400/50'
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

export default ProductCard;
