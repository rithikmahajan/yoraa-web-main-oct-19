# 🚀 Yoraa.in Frontend - API Integration Guide

## ✅ Setup Complete!

Your Yoraa.in frontend is now connected to the backend API. All necessary files have been created and configured.

---

## 📁 Files Created

### Environment Configuration
- `.env.local` - Local development configuration (currently active)
- `.env.development` - Development environment
- `.env.production` - Production environment

### API Services
- `src/services/api.js` - Core Axios configuration with interceptors
- `src/services/apiEndpoints.js` - All API endpoint functions organized by feature
- `src/services/testAPI.js` - API testing utilities

### Utilities & Hooks
- `src/utils/auth.js` - Authentication helper functions
- `src/hooks/useApi.js` - Custom React hooks for API calls

### Example Components
- `src/examples/LoginExample.jsx` - Login component example
- `src/examples/ProductListExample.jsx` - Product listing with pagination
- `src/examples/CartExample.jsx` - Shopping cart management

---

## 🎯 Quick Start

### 1. Environment Setup

Your environment is currently set to **Local Development**:
```env
VITE_API_URL=http://localhost:8000/api
```

To switch to **Production**:
```env
VITE_API_URL=https://api.yoraa.in.net/api
```

### 2. Test Backend Connection

Open your browser console and run:
```javascript
// Import and run test
import { testConnection } from './src/services/testAPI';
testConnection();
```

Or use the browser console directly:
```javascript
fetch('http://localhost:8000/api/config/razorpay-key')
  .then(res => res.json())
  .then(data => console.log('✅ Connected!', data))
  .catch(err => console.error('❌ Failed:', err));
```

---

## 💻 Usage Examples

### Example 1: Login

```javascript
import { authAPI } from './services/apiEndpoints';
import { setAuthToken, setUserData } from './utils/auth';

const handleLogin = async (phone, password) => {
  try {
    const response = await authAPI.login({ phone, password });
    
    // Store auth data
    setAuthToken(response.data.data.token);
    setUserData(response.data.data.user);
    
    console.log('Login successful!');
  } catch (error) {
    console.error('Login failed:', error.response?.data?.message);
  }
};
```

### Example 2: Fetch Products

```javascript
import { productAPI } from './services/apiEndpoints';

const fetchProducts = async () => {
  try {
    const response = await productAPI.getAll({ page: 1, limit: 20 });
    const products = response.data.data;
    console.log('Products:', products);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Example 3: Add to Cart

```javascript
import { cartAPI } from './services/apiEndpoints';

const addToCart = async (productId, quantity = 1) => {
  try {
    await cartAPI.add({ itemId: productId, quantity });
    console.log('Added to cart!');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Example 4: Using Custom Hooks

```javascript
import { useApi } from './hooks/useApi';
import { productAPI } from './services/apiEndpoints';

function ProductList() {
  const { data, loading, error } = useApi(() => productAPI.getAll());

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.data?.map(product => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}
```

---

## 🔑 Available API Endpoints

### Authentication
- `authAPI.register(data)` - Register new user
- `authAPI.login(credentials)` - Login
- `authAPI.logout()` - Logout
- `authAPI.verifyOTP(data)` - Verify OTP
- `authAPI.forgotPassword(data)` - Request password reset
- `authAPI.resetPassword(data)` - Reset password

### User Profile
- `userAPI.getProfile()` - Get user profile
- `userAPI.updateProfile(data)` - Update profile
- `userAPI.deleteAccount(userId)` - Delete account

### Products
- `productAPI.getAll(params)` - Get all products
- `productAPI.getById(id)` - Get single product
- `productAPI.getByCategory(categoryId)` - Get by category
- `productAPI.search(query)` - Search products

### Categories
- `categoryAPI.getAll()` - Get all categories
- `categoryAPI.getById(id)` - Get category details

### Shopping Cart
- `cartAPI.get()` - Get cart
- `cartAPI.add(data)` - Add to cart
- `cartAPI.update(itemId, data)` - Update quantity
- `cartAPI.remove(itemId)` - Remove from cart
- `cartAPI.clear()` - Clear cart

### Wishlist
- `wishlistAPI.get()` - Get wishlist
- `wishlistAPI.add(data)` - Add to wishlist
- `wishlistAPI.remove(itemId)` - Remove from wishlist

### Orders
- `orderAPI.getAll()` - Get user orders
- `orderAPI.getById(id)` - Get order details
- `orderAPI.create(data)` - Create order
- `orderAPI.cancel(id)` - Cancel order

### Payment
- `paymentAPI.getKey()` - Get Razorpay key
- `paymentAPI.createOrder(data)` - Create payment order
- `paymentAPI.verify(data)` - Verify payment

### Address
- `addressAPI.getAll()` - Get addresses
- `addressAPI.create(data)` - Add address
- `addressAPI.update(id, data)` - Update address
- `addressAPI.delete(id)` - Delete address

### Reviews
- `reviewAPI.getByProduct(productId)` - Get reviews
- `reviewAPI.create(data)` - Submit review

### Notifications
- `notificationAPI.getAll()` - Get notifications
- `notificationAPI.markAsRead(id)` - Mark as read

### Other Features
- `promoAPI` - Promo codes
- `chatAPI` - Chat support
- `pointsAPI` - Points & rewards
- `inviteAPI` - Invite friends
- `bannerAPI` - Banners
- `faqAPI` - FAQs

---

## 🔧 Configuration

### API Base URL
The API URL is automatically selected based on environment:

```javascript
// In your code
const API_URL = import.meta.env.VITE_API_URL;

// Local: http://localhost:8000/api
// Production: https://api.yoraa.in.net/api
```

### Authentication
Tokens are automatically added to requests via interceptors:

```javascript
// Token is stored in localStorage
localStorage.setItem('token', 'your-jwt-token');

// Automatically added to all API requests
Authorization: Bearer <token>
```

---

## 🧪 Testing

### Test All Endpoints
```javascript
import { runAllTests } from './services/testAPI';
runAllTests();
```

### Test Specific Features
```javascript
import { testProductEndpoints, testAuthEndpoints } from './services/testAPI';

testProductEndpoints();
testAuthEndpoints();
```

---

## ⚠️ Error Handling

All API calls include automatic error handling:

```javascript
import { handleApiError } from './services/api';

try {
  const response = await productAPI.getAll();
} catch (error) {
  const errorMessage = handleApiError(error);
  console.error(errorMessage);
}
```

Common error responses:
- **400**: Bad Request
- **401**: Unauthorized (redirects to login)
- **403**: Forbidden
- **404**: Not Found
- **500**: Server Error

---

## 🚀 Running the Application

### Start Frontend (Vite)
```bash
npm run dev
```
Your app will run on `http://localhost:5173`

### Start Backend (if running locally)
```bash
# In backend directory
cd oct-7-backend-admin-main
npm start
```
Backend will run on `http://localhost:8000`

---

## 📝 Example Component Integration

Replace your existing components with API calls:

### Before:
```javascript
// Using mock data
const products = mockProducts;
```

### After:
```javascript
// Using real API
import { productAPI } from './services/apiEndpoints';

const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    const response = await productAPI.getAll();
    setProducts(response.data.data);
  };
  fetchProducts();
}, []);
```

---

## 🔒 Security Notes

1. **Never commit `.env.local`** to version control
2. Store tokens securely (currently using localStorage)
3. Token automatically expires and redirects to login
4. All requests use HTTPS in production

---

## 📚 Additional Resources

- **Backend API Documentation**: Check Postman collections
- **Full Endpoint List**: See `src/services/apiEndpoints.js`
- **Example Components**: See `src/examples/` folder

---

## ✅ Checklist

- [x] Environment variables configured
- [x] Axios installed and configured
- [x] API service files created
- [x] Authentication helpers created
- [x] Custom hooks created
- [x] Example components created
- [ ] Test backend connection
- [ ] Integrate with existing components
- [ ] Test authentication flow
- [ ] Test cart functionality

---

## 🆘 Troubleshooting

### Cannot connect to backend?
1. Check if backend is running: `curl http://localhost:8000/api/config/razorpay-key`
2. Verify VITE_API_URL in `.env.local`
3. Check browser console for errors

### CORS errors?
Make sure backend allows your origin:
- Local: `http://localhost:5173`
- Production: `https://yoraa.in`

### 401 Errors?
1. Check if token exists: `localStorage.getItem('token')`
2. Try logging in again
3. Token may have expired

---

## 🎉 You're Ready!

Your frontend is now fully connected to the Yoraa backend API. Start building amazing features!

**Need Help?**
- Check example components in `src/examples/`
- Review API endpoints in `src/services/apiEndpoints.js`
- Test connection with `src/services/testAPI.js`

---

**Last Updated**: October 18, 2025  
**Version**: 1.0.0  
**Status**: ✅ Ready for Development
