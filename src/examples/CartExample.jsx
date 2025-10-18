import React, { useState } from 'react';
import { cartAPI } from '../services/apiEndpoints';
import { handleApiError } from '../services/api';

/**
 * Example Cart Component
 * Shows how to manage cart operations
 */
const CartExample = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cart
  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await cartAPI.get();
      setCart(response.data?.data);
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add to cart
  const addToCart = async (itemId, quantity = 1) => {
    try {
      setLoading(true);
      setError(null);
      await cartAPI.add({ itemId, quantity });
      alert('Item added to cart!');
      fetchCart(); // Refresh cart
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error adding to cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Update cart item quantity
  const updateQuantity = async (itemId, quantity) => {
    try {
      setLoading(true);
      setError(null);
      await cartAPI.update(itemId, { quantity });
      fetchCart(); // Refresh cart
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error updating cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    try {
      setLoading(true);
      setError(null);
      await cartAPI.remove(itemId);
      alert('Item removed from cart!');
      fetchCart(); // Refresh cart
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error removing from cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Clear cart
  const clearCart = async () => {
    if (!confirm('Are you sure you want to clear your cart?')) return;
    
    try {
      setLoading(true);
      setError(null);
      await cartAPI.clear();
      setCart(null);
      alert('Cart cleared!');
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error clearing cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load cart on mount
  React.useEffect(() => {
    fetchCart();
  }, []);

  if (loading && !cart) {
    return <div className="text-center py-8">Loading cart...</div>;
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-red-100 text-red-700 rounded-lg">
        <h3 className="font-bold mb-2">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  const cartItems = cart?.items || [];
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            disabled={loading}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={loading || item.quantity <= 1}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    disabled={loading}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    disabled={loading}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center text-xl font-bold mb-4">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartExample;
