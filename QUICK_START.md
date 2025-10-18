# 🚀 Quick Start - Backend API Integration

## ✅ Setup Complete!

All backend APIs are now connected and ready to use!

---

## 🔥 Quick Test (5 Minutes)

### Step 1: Open Test Page

```bash
# Open the test page in your browser
open test-backend-api.html

# Or if using dev server:
npm run dev
# Then open http://localhost:5173/test-backend-api.html
```

### Step 2: Test Connection

Click the **"Test Connection"** button on the test page.

✅ **Success**: You'll see Razorpay key response  
❌ **Failed**: Backend is not running

### Step 3: If Backend Not Running

```bash
# Navigate to backend folder
cd oct-7-backend-admin-main

# Install dependencies (first time only)
npm install

# Start backend server
npm start

# Backend should run on http://localhost:8000
```

### Step 4: Test Again

Go back to test page and click "Test Connection" again.

---

## 💻 Use in Your Code

### Import Services

```javascript
// Authentication
import { 
  registerWithEmail, 
  loginWithEmail, 
  logout 
} from './services/authService';

// API Endpoints
import { 
  productAPI, 
  cartAPI, 
  orderAPI,
  userAPI 
} from './services/apiEndpoints';
```

### Example: Login User

```javascript
const handleLogin = async () => {
  try {
    const result = await loginWithEmail({
      email: 'user@example.com',
      password: 'password123'
    });
    
    console.log('✅ Logged in!', result.user);
    // Token automatically stored
    // Navigate to home page
  } catch (error) {
    console.error('❌ Login failed:', error.message);
  }
};
```

### Example: Get Products

```javascript
const fetchProducts = async () => {
  try {
    const response = await productAPI.getAll({ 
      page: 1, 
      limit: 20 
    });
    
    const products = response.data.data;
    console.log('✅ Got products:', products);
    return products;
  } catch (error) {
    console.error('❌ Failed:', error.message);
  }
};
```

### Example: Add to Cart

```javascript
const addToCart = async (productId) => {
  try {
    const response = await cartAPI.add({
      itemId: productId,
      quantity: 1,
      size: 'M',
      color: 'Blue'
    });
    
    console.log('✅ Added to cart!', response.data);
  } catch (error) {
    console.error('❌ Failed:', error.message);
  }
};
```

---

## 🔐 Authentication Flow

```
1. User fills login form
   ↓
2. Call loginWithEmail(credentials)
   ↓
3. Token saved automatically
   ↓
4. All API calls include token
   ↓
5. User stays logged in
```

### Check If User Logged In

```javascript
// Check token exists
const isLoggedIn = !!localStorage.getItem('token');

// Or use auth service
import { isAuthenticated } from './services/authService';
const loggedIn = isAuthenticated();
```

---

## 📝 All Available APIs

### 🔐 Authentication
```javascript
registerWithEmail(userData)
loginWithEmail(credentials)
loginWithPhone(credentials)
signInWithGoogle()
signInWithApple()
logout()
verifyOTP(data)
resendOTP(data)
forgotPassword(data)
resetPasswordWithToken(data)
```

### 🛍️ Products
```javascript
productAPI.getAll(params)
productAPI.getById(id)
productAPI.search(query)
productAPI.getByCategory(categoryId)
productAPI.bulkFetch(ids)
```

### 🛒 Cart
```javascript
cartAPI.get()
cartAPI.add(data)
cartAPI.update(itemId, data)
cartAPI.remove(itemId)
cartAPI.clear()
```

### ❤️ Wishlist
```javascript
wishlistAPI.get()
wishlistAPI.add(data)
wishlistAPI.remove(itemId)
wishlistAPI.moveToCart(data)
```

### 📦 Orders
```javascript
orderAPI.getAll()
orderAPI.getById(id)
orderAPI.create(data)
orderAPI.cancel(id)
```

### 💳 Payment
```javascript
paymentAPI.getKey()
paymentAPI.createOrder(data)
paymentAPI.verify(data)
```

### 👤 User Profile
```javascript
userAPI.getProfile()
userAPI.updateProfile(data)
userAPI.deleteAccount(userId)
```

### 📍 Address
```javascript
addressAPI.getAll()
addressAPI.create(data)
addressAPI.update(id, data)
addressAPI.delete(id)
addressAPI.setDefault(id)
```

### 📂 Categories
```javascript
categoryAPI.getAll()
categoryAPI.getById(id)
categoryAPI.getSubcategories()
```

### ⭐ Reviews
```javascript
reviewAPI.getByProduct(productId)
reviewAPI.create(data)
reviewAPI.update(id, data)
reviewAPI.delete(id)
```

### 🎁 Promo Codes
```javascript
promoAPI.validate(data)
promoAPI.getAvailable()
```

### 🔔 Notifications
```javascript
notificationAPI.getAll()
notificationAPI.markAsRead(id)
notificationAPI.delete(id)
notificationAPI.registerFCM(data)
```

### 💬 Chat
```javascript
chatAPI.getConversations()
chatAPI.send(data)
chatAPI.getMessages(conversationId)
```

### 🎯 Points & Rewards
```javascript
pointsAPI.getBalance()
pointsAPI.getHistory()
pointsAPI.redeem(data)
```

### 👥 Invite
```javascript
inviteAPI.getCode()
inviteAPI.send(data)
inviteAPI.getRewards()
```

### 📮 Inbox
```javascript
inboxAPI.getAll()
inboxAPI.getById(id)
inboxAPI.markAsRead(id)
inboxAPI.delete(id)
```

### 🎨 Banners
```javascript
bannerAPI.getAll()
bannerAPI.getHome()
```

### ❓ FAQs
```javascript
faqAPI.getAll()
faqAPI.getByCategory(category)
```

### ⚙️ Config
```javascript
configAPI.getRazorpayKey()
configAPI.getAppSettings()
```

---

## 🔧 Environment Variables

### Local Development
```bash
# .env.development
VITE_API_URL=http://localhost:8000/api
VITE_ENV=development
```

### Production
```bash
# .env.production
VITE_API_URL=https://api.yoraa.in.net/api
VITE_ENV=production
```

---

## 🧪 Testing Commands

### Browser Console
```javascript
// Quick test
fetch('http://localhost:8000/api/config/razorpay-key')
  .then(r => r.json())
  .then(d => console.log('✅ Connected!', d));
```

### Test with cURL
```bash
# Test connection
curl http://localhost:8000/api/config/razorpay-key

# Test with production
curl https://api.yoraa.in.net/api/config/razorpay-key
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `AUTH_SETUP_COMPLETE.md` | Authentication guide with examples |
| `BACKEND_API_INTEGRATION_COMPLETE.md` | Complete integration status |
| `FRONTEND_BACKEND_CONNECTION_GUIDE.md` | Detailed connection guide |
| `test-backend-api.html` | Interactive test page |
| `src/services/testAllAPIs.js` | Automated test suite |

---

## ⚡ Common Issues

### Issue: Connection Failed

**Solution:**
1. Check if backend is running: `curl http://localhost:8000/api/config/razorpay-key`
2. Start backend: `cd oct-7-backend-admin-main && npm start`
3. Check port 8000 is not in use

### Issue: 401 Unauthorized

**Solution:**
1. Login first to get token
2. Token automatically added to requests
3. If expired, login again

### Issue: CORS Error

**Solution:**
1. Backend should allow http://localhost:5173
2. Check backend CORS configuration
3. Use correct API URL

---

## ✅ Quick Checklist

Before starting development:

- [ ] Backend running on http://localhost:8000
- [ ] Test page shows "✅ Connected"
- [ ] Can login/register successfully
- [ ] Token stored in localStorage
- [ ] Product API works
- [ ] Cart API works (after login)

---

## 🎯 Next Steps

1. ✅ **Test Connection**: Open `test-backend-api.html`
2. ✅ **Test Auth**: Register/Login
3. ✅ **Use in Components**: Import services
4. ✅ **Build Features**: Use APIs in your app
5. ✅ **Deploy**: Build for production

---

## 🚀 You're Ready!

Everything is set up and working. Start building your features!

**Quick Links:**
- Test Page: `test-backend-api.html`
- Auth Service: `src/services/authService.js`
- API Endpoints: `src/services/apiEndpoints.js`
- Full Guide: `AUTH_SETUP_COMPLETE.md`

---

**Need Help?**
- Check documentation files above
- Open test page to verify connection
- All APIs are documented with JSDoc comments

Happy Coding! 🎉
