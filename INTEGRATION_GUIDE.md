# 🔗 Integrating APIs into Existing Components

This guide shows you how to integrate the backend APIs into your existing Yoraa.in components.

---

## 📋 Components to Update

Based on your project structure, here are the main components that need API integration:

### 1. **Home.jsx** - Product Display
### 2. **ProductList.jsx** - Product Listing
### 3. **ProductDetail.jsx** - Single Product View
### 4. **Cart.jsx** - Shopping Cart
### 5. **Wishlist.jsx** - User Wishlist
### 6. **Order.jsx** - Order History
### 7. **Profile.jsx** - User Profile
### 8. **Auth/** - Login & Signup Components

---

## 🏠 1. Home.jsx - Product Display

### Current Code Pattern:
```javascript
// Probably using static data
const products = mockProducts;
```

### Updated with API:
```javascript
import { useEffect, useState } from 'react';
import { productAPI } from '../services/apiEndpoints';
import { handleApiError } from '../services/api';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getAll({ page: 1, limit: 12 });
      setProducts(response.data.data);
    } catch (err) {
      setError(handleApiError(err));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Your existing JSX with products.map() */}
    </div>
  );
}
```

---

## 🛍️ 2. ProductList.jsx - Product Listing with Filters

### Add API Integration:
```javascript
import { useEffect, useState } from 'react';
import { productAPI, categoryAPI } from '../services/apiEndpoints';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch products when category or page changes
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, page]);

  const fetchCategories = async () => {
    try {
      const response = await categoryAPI.getAll();
      setCategories(response.data.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      let response;
      if (selectedCategory) {
        response = await productAPI.getByCategory(selectedCategory);
      } else {
        response = await productAPI.getAll({ page, limit: 20 });
      }
      
      const newProducts = response.data.data;
      setProducts(prev => page === 1 ? newProducts : [...prev, ...newProducts]);
      setHasMore(newProducts.length === 20);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
    setProducts([]);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      {/* Category filters */}
      <div className="categories">
        <button onClick={() => handleCategoryChange(null)}>All</button>
        {categories.map(cat => (
          <button key={cat._id} onClick={() => handleCategoryChange(cat._id)}>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product._id}>
            {/* Your product card component */}
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
```

---

## 🔍 3. ProductDetail.jsx - Single Product View

### Add API Integration:
```javascript
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productAPI, reviewAPI, cartAPI, wishlistAPI } from '../services/apiEndpoints';

function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
      fetchReviews();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getById(id);
      setProduct(response.data.data);
    } catch (err) {
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await reviewAPI.getByProduct(id);
      setReviews(response.data.data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleAddToCart = async () => {
    try {
      await cartAPI.add({
        itemId: product._id,
        quantity: 1,
        // Add size, color if needed
      });
      alert('Added to cart!');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add to cart');
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await wishlistAPI.add({ itemId: product._id });
      alert('Added to wishlist!');
    } catch (err) {
      console.error('Error adding to wishlist:', err);
      alert('Failed to add to wishlist');
    }
  };

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>

      {/* Reviews section */}
      <div className="reviews">
        <h2>Reviews</h2>
        {reviews.map(review => (
          <div key={review._id}>
            <p>Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 🛒 4. Cart.jsx - Shopping Cart

### Replace your existing cart logic:
```javascript
import { useEffect, useState } from 'react';
import { cartAPI } from '../services/apiEndpoints';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await cartAPI.get();
      setCart(response.data.data);
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      await cartAPI.update(itemId, { quantity });
      fetchCart(); // Refresh cart
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await cartAPI.remove(itemId);
      fetchCart(); // Refresh cart
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  if (loading) return <div>Loading cart...</div>;

  const items = cart?.items || [];
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h1>Shopping Cart ({items.length} items)</h1>
      
      {items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          {items.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <div>
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item._id)}>Remove</button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total: ₹{total}</h2>
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
```

---

## ❤️ 5. Wishlist.jsx

### Add API Integration:
```javascript
import { useEffect, useState } from 'react';
import { wishlistAPI, cartAPI } from '../services/apiEndpoints';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const response = await wishlistAPI.get();
      setWishlist(response.data.data);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await wishlistAPI.remove(itemId);
      fetchWishlist();
    } catch (err) {
      console.error('Error removing from wishlist:', err);
    }
  };

  const moveToCart = async (itemId) => {
    try {
      await wishlistAPI.moveToCart({ itemId });
      alert('Moved to cart!');
      fetchWishlist();
    } catch (err) {
      console.error('Error moving to cart:', err);
    }
  };

  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlist.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => moveToCart(item._id)}>Move to Cart</button>
          <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
```

---

## 📦 6. Order.jsx - Order History

### Add API Integration:
```javascript
import { useEffect, useState } from 'react';
import { orderAPI } from '../services/apiEndpoints';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await orderAPI.getAll();
      setOrders(response.data.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId) => {
    if (!confirm('Are you sure you want to cancel this order?')) return;
    
    try {
      await orderAPI.cancel(orderId);
      alert('Order cancelled');
      fetchOrders();
    } catch (err) {
      console.error('Error cancelling order:', err);
      alert('Failed to cancel order');
    }
  };

  return (
    <div>
      <h1>My Orders</h1>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <h3>Order #{order.orderNumber}</h3>
          <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>
          
          {order.status === 'pending' && (
            <button onClick={() => cancelOrder(order._id)}>Cancel Order</button>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## 👤 7. Profile.jsx - User Profile

### Add API Integration:
```javascript
import { useEffect, useState } from 'react';
import { userAPI } from '../services/apiEndpoints';
import { getUserData, setUserData } from '../utils/auth';

function Profile() {
  const [user, setUser] = useState(getUserData());
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const response = await userAPI.updateProfile(formData);
      setUserData(response.data.data);
      setUser(response.data.data);
      setEditing(false);
      alert('Profile updated!');
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <h1>My Profile</h1>
      
      {!editing ? (
        <div>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Email"
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="Phone"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}
```

---

## 🔐 8. Auth/Login.jsx

### Add API Integration:
```javascript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/apiEndpoints';
import { setAuthToken, setUserData } from '../../utils/auth';

function Login() {
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await authAPI.login(formData);
      
      // Store auth data
      setAuthToken(response.data.data.token);
      setUserData(response.data.data.user);
      
      // Redirect to home
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        placeholder="Phone Number"
        required
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        placeholder="Password"
        required
      />
      
      {error && <div className="error">{error}</div>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

---

## 🔍 9. Search.jsx - Product Search

### Add API Integration:
```javascript
import { useState, useEffect } from 'react';
import { productAPI } from '../services/apiEndpoints';
import { useSearch } from '../hooks/useApi';

function Search() {
  const { query, setQuery, results, loading } = useSearch(productAPI.search);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      
      {loading && <div>Searching...</div>}
      
      <div className="search-results">
        {results.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## ✅ Quick Integration Checklist

For each component:

1. **Import necessary API functions**
   ```javascript
   import { productAPI, cartAPI } from '../services/apiEndpoints';
   ```

2. **Add state for data, loading, and errors**
   ```javascript
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   ```

3. **Fetch data in useEffect**
   ```javascript
   useEffect(() => {
     fetchData();
   }, []);
   ```

4. **Handle loading and error states**
   ```javascript
   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;
   ```

5. **Use fetched data in JSX**
   ```javascript
   {data.map(item => <div key={item._id}>...</div>)}
   ```

---

## 🎯 Common Patterns

### Pattern 1: Fetch on Mount
```javascript
useEffect(() => {
  fetchData();
}, []);
```

### Pattern 2: Fetch with Dependencies
```javascript
useEffect(() => {
  if (productId) {
    fetchProduct(productId);
  }
}, [productId]);
```

### Pattern 3: Error Handling
```javascript
try {
  const response = await api.someEndpoint();
  setData(response.data.data);
} catch (err) {
  setError(handleApiError(err));
}
```

### Pattern 4: Loading States
```javascript
setLoading(true);
try {
  // API call
} finally {
  setLoading(false);
}
```

---

## 🚀 Next Steps

1. Start with Home.jsx - Add product fetching
2. Update ProductList.jsx - Add category filtering
3. Update Cart.jsx - Connect to cart API
4. Update Auth components - Add authentication
5. Test each component as you go
6. Handle edge cases (empty states, errors)

---

## 💡 Tips

- Always handle loading and error states
- Use try-catch for all API calls
- Refresh data after mutations (add, update, delete)
- Store tokens using the auth utilities
- Test with the test-api.html file first

---

**Ready to integrate?** Start with one component at a time and test thoroughly!
