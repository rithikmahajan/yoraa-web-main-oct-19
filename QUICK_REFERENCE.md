# 🚀 Yoraa.in API - Quick Reference

## 📡 Base URLs
```javascript
Local:      http://localhost:8000/api
Production: https://api.yoraa.in.net/api
```

---

## 🔥 Most Used Endpoints

### Products
```javascript
import { productAPI } from './services/apiEndpoints';

// Get all products
await productAPI.getAll({ page: 1, limit: 20 });

// Get single product
await productAPI.getById(productId);

// Search products
await productAPI.search('nike shoes');

// Get by category
await productAPI.getByCategory(categoryId);
```

### Cart
```javascript
import { cartAPI } from './services/apiEndpoints';

// Get cart
await cartAPI.get();

// Add to cart
await cartAPI.add({ itemId, quantity: 1 });

// Update quantity
await cartAPI.update(itemId, { quantity: 2 });

// Remove item
await cartAPI.remove(itemId);

// Clear cart
await cartAPI.clear();
```

### Authentication
```javascript
import { authAPI } from './services/apiEndpoints';
import { setAuthToken, setUserData } from './utils/auth';

// Register
const res = await authAPI.register({ name, email, phone, password });

// Login
const res = await authAPI.login({ phone, password });
setAuthToken(res.data.data.token);
setUserData(res.data.data.user);

// Logout
await authAPI.logout();
```

### Wishlist
```javascript
import { wishlistAPI } from './services/apiEndpoints';

// Get wishlist
await wishlistAPI.get();

// Add to wishlist
await wishlistAPI.add({ itemId });

// Remove from wishlist
await wishlistAPI.remove(itemId);
```

### Orders
```javascript
import { orderAPI } from './services/apiEndpoints';

// Get all orders
await orderAPI.getAll();

// Get single order
await orderAPI.getById(orderId);

// Create order
await orderAPI.create(orderData);

// Cancel order
await orderAPI.cancel(orderId);
```

### User Profile
```javascript
import { userAPI } from './services/apiEndpoints';

// Get profile
await userAPI.getProfile();

// Update profile
await userAPI.updateProfile({ name, email, phone });
```

---

## 🎣 Custom Hooks

### useApi Hook
```javascript
import { useApi } from './hooks/useApi';
import { productAPI } from './services/apiEndpoints';

function MyComponent() {
  const { data, loading, error, refetch } = useApi(() => productAPI.getAll());

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{/* Use data */}</div>;
}
```

### useAuth Hook
```javascript
import { useAuth } from './hooks/useApi';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const handleLogin = (token, userData) => {
    login(token, userData);
  };

  return <div>{user?.name}</div>;
}
```

### useSearch Hook
```javascript
import { useSearch } from './hooks/useApi';
import { productAPI } from './services/apiEndpoints';

function SearchComponent() {
  const { query, setQuery, results, loading } = useSearch(productAPI.search);

  return (
    <input 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
```

---

## 🔧 Common Patterns

### Fetch Data on Mount
```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await productAPI.getAll();
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);
```

### Handle Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    await authAPI.login(formData);
    navigate('/home');
  } catch (error) {
    setError(error.response?.data?.message);
  } finally {
    setLoading(false);
  }
};
```

### Pagination
```javascript
const [page, setPage] = useState(1);
const [products, setProducts] = useState([]);

const loadMore = async () => {
  const response = await productAPI.getAll({ page, limit: 20 });
  setProducts(prev => [...prev, ...response.data.data]);
  setPage(prev => prev + 1);
};
```

---

## 🔐 Auth Helpers

```javascript
import { 
  setAuthToken, 
  getAuthToken,
  removeAuthToken,
  isAuthenticated,
  setUserData,
  getUserData,
  logoutUser 
} from './utils/auth';

// Store token
setAuthToken('your-jwt-token');

// Get token
const token = getAuthToken();

// Check if logged in
if (isAuthenticated()) {
  // User is logged in
}

// Store user data
setUserData({ name: 'John', email: 'john@example.com' });

// Get user data
const user = getUserData();

// Logout (clears everything)
logoutUser();
```

---

## ⚠️ Error Handling

```javascript
import { handleApiError } from './services/api';

try {
  const response = await productAPI.getAll();
} catch (error) {
  const errorMessage = handleApiError(error);
  console.error(errorMessage);
  // Show to user: toast, alert, etc.
}
```

---

## 🧪 Testing

### Test Connection
```javascript
import { testConnection } from './services/testAPI';
testConnection();
```

### Run All Tests
```javascript
import { runAllTests } from './services/testAPI';
runAllTests();
```

### Browser Console
```javascript
fetch('http://localhost:8000/api/config/razorpay-key')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📋 Response Format

### Success Response
```javascript
{
  data: { /* your data */ },
  message: "Success message",
  success: true,
  statusCode: 200
}
```

### Error Response
```javascript
{
  data: null,
  message: "Error message",
  success: false,
  statusCode: 400
}
```

### Accessing Data
```javascript
const response = await productAPI.getAll();
const products = response.data.data; // Array of products
```

---

## 🔄 Common Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200  | Success | Process data |
| 400  | Bad Request | Check parameters |
| 401  | Unauthorized | Login required |
| 403  | Forbidden | No permission |
| 404  | Not Found | Resource doesn't exist |
| 500  | Server Error | Try again later |

---

## 💡 Tips

1. **Always check if user is authenticated** before calling protected endpoints
2. **Handle loading states** for better UX
3. **Catch errors** and show user-friendly messages
4. **Refresh data** after mutations (add, update, delete)
5. **Use custom hooks** to reduce boilerplate code
6. **Test endpoints** with test-api.html before integrating

---

## 📦 All Available APIs

```javascript
import {
  authAPI,        // Authentication
  userAPI,        // User profile
  productAPI,     // Products
  categoryAPI,    // Categories
  cartAPI,        // Shopping cart
  wishlistAPI,    // Wishlist
  orderAPI,       // Orders
  paymentAPI,     // Payments
  addressAPI,     // Addresses
  reviewAPI,      // Reviews
  promoAPI,       // Promo codes
  notificationAPI,// Notifications
  chatAPI,        // Chat support
  pointsAPI,      // Points & rewards
  inviteAPI,      // Invite friends
  inboxAPI,       // Inbox messages
  bannerAPI,      // Banners
  faqAPI,         // FAQs
  configAPI,      // Configuration
} from './services/apiEndpoints';
```

---

## 🚀 Quick Start Checklist

- [ ] Backend is running (if local)
- [ ] `.env.local` is configured
- [ ] `npm install` completed
- [ ] Test connection with `test-api.html`
- [ ] Import API functions in your component
- [ ] Add error handling
- [ ] Test your integration

---

## 📞 File Locations

```
src/
  services/
    api.js              # Axios config
    apiEndpoints.js     # All API functions
    testAPI.js          # Testing utilities
  
  utils/
    auth.js             # Auth helpers
  
  hooks/
    useApi.js           # Custom hooks
  
  examples/
    LoginExample.jsx
    ProductListExample.jsx
    CartExample.jsx
```

---

**Print this and keep it handy!** 📌
