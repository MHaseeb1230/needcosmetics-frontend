import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import cartService from '../services/cartService';
import productService from '../services/productService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cart from backend
    const fetchCart = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await cartService.getCart();
            if (response.success && response.data) {
                setCart(response.data.items || []);
            }
        } catch (err) {
            console.error('Error fetching cart:', err);
            setError(err.message || 'Failed to load cart');
            setCart([]);
        } finally {
            setLoading(false);
        }
    };

    // Load cart on mount
    useEffect(() => {
        fetchCart();
    }, []);

    // Add item to cart
    const addToCart = async (product, quantity = 1) => {
        try {
            setError(null);
            
            // Get product ID - handle different product structures
            let productId = product.id || product.productId;
            
            if (!productId) {
                console.error('Product object:', product);
                throw new Error('Product ID is missing. Product object structure: ' + JSON.stringify(product));
            }
            
            // Check if productId is numeric (from mockData) - need to get UUID from backend
            const isNumericId = typeof productId === 'number' || (typeof productId === 'string' && /^\d+$/.test(productId));
            
            if (isNumericId) {
                // Product is from mockData with numeric ID, need to fetch UUID from backend using slug
                try {
                    const slug = product.slug;
                    if (slug) {
                        const productResponse = await productService.getProductBySlug(slug);
                        if (productResponse.success && productResponse.data) {
                            productId = productResponse.data.id; // Use UUID from backend
                            console.log('Mapped numeric ID to UUID:', product.id, '->', productId);
                        } else {
                            throw new Error('Product not found in backend. Please ensure product is imported to database.');
                        }
                    } else {
                        throw new Error('Product slug is missing. Cannot map to backend product.');
                    }
                } catch (fetchError) {
                    console.error('Error fetching product UUID:', fetchError);
                    throw new Error('Product not found in backend. Please ensure product is imported to database.');
                }
            }
            
            // Validate UUID format
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (!uuidRegex.test(productId)) {
                throw new Error(`Invalid product ID format: ${productId}. Expected UUID format.`);
            }
            
            // Log for debugging
            console.log('Adding to cart - Product ID:', productId, 'Type:', typeof productId);
            
            await cartService.addToCart(productId, quantity);
            await fetchCart(); // Refresh cart after adding
            toast.success(`${product.name || 'Product'} added to bag!`, {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (err) {
            console.error('Error adding to cart:', err);
            setError(err.message || 'Failed to add item to cart');
            toast.error(err.message || 'Failed to add item to cart', {
                position: "top-right",
                autoClose: 3000,
            });
            throw err;
        }
    };

    // Remove item from cart
    const removeFromCart = async (itemId) => {
        try {
            setError(null);
            await cartService.removeFromCart(itemId);
            await fetchCart(); // Refresh cart after removing
            toast.success('Item removed from bag', {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (err) {
            console.error('Error removing from cart:', err);
            setError(err.message || 'Failed to remove item from cart');
            toast.error(err.message || 'Failed to remove item from cart', {
                position: "top-right",
                autoClose: 3000,
            });
            throw err;
        }
    };

    // Update quantity
    const updateQuantity = async (itemId, quantity) => {
        if (quantity < 1) return;
        try {
            setError(null);
            await cartService.updateCartItem(itemId, quantity);
            await fetchCart(); // Refresh cart after updating
            toast.success('Cart updated', {
                position: "top-right",
                autoClose: 2000,
            });
        } catch (err) {
            console.error('Error updating cart:', err);
            setError(err.message || 'Failed to update cart item');
            toast.error(err.message || 'Failed to update cart item', {
                position: "top-right",
                autoClose: 3000,
            });
            throw err;
        }
    };

    // Clear cart
    const clearCart = async () => {
        try {
            setError(null);
            await cartService.clearCart();
            setCart([]);
            toast.success('Cart cleared', {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (err) {
            console.error('Error clearing cart:', err);
            setError(err.message || 'Failed to clear cart');
            toast.error(err.message || 'Failed to clear cart', {
                position: "top-right",
                autoClose: 3000,
            });
            throw err;
        }
    };

    // Calculate totals from cart items
    const cartTotal = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart, 
            cartTotal, 
            cartCount,
            loading,
            error,
            refreshCart: fetchCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
