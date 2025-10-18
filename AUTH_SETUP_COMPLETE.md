# 🔐 Authentication API Integration - Complete Setup

## ✅ Setup Complete!

Your Yoraa.in frontend is now fully connected to the backend API with all authentication endpoints implemented.

---

## 📋 Implemented Authentication Endpoints

### ✓ All Auth Endpoints Connected:

1. **POST `/api/auth/register`** - Register new user
2. **POST `/api/auth/login`** - Login with email/phone
3. **POST `/api/auth/social-login`** - Google/Apple login
4. **POST `/api/auth/verify-otp`** - Verify OTP
5. **POST `/api/auth/resend-otp`** - Resend OTP
6. **POST `/api/auth/logout`** - Logout user
7. **POST `/api/auth/forgot-password`** - Request password reset
8. **POST `/api/auth/reset-password`** - Reset password with token

---

## 🎯 Quick Start Guide

### 1. Environment Configuration

Your environment files are already set up:

**Development** (`.env.development`):
```bash
VITE_API_URL=http://localhost:8000/api
VITE_ENV=development
```

**Production** (`.env.production`):
```bash
VITE_API_URL=https://api.yoraa.in.net/api
VITE_ENV=production
```

### 2. How to Use Authentication

Import the auth service in your components:

```javascript
import {
  registerWithEmail,
  loginWithEmail,
  loginWithPhone,
  signInWithGoogle,
  signInWithApple,
  logout,
  verifyOTP,
  resendOTP,
  forgotPassword,
  resetPasswordWithToken
} from './services/authService';
```

---

## 📖 Usage Examples

### Register New User

```javascript
const handleRegister = async () => {
  try {
    const result = await registerWithEmail({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+919876543210',
      password: 'SecurePass123!'
    });
    
    console.log('✅ Registration successful!', result);
    // User is automatically logged in
    // Token stored in localStorage
    // Navigate to home page
  } catch (error) {
    console.error('❌ Registration failed:', error.message);
    alert(error.message);
  }
};
```

### Login with Email

```javascript
const handleEmailLogin = async () => {
  try {
    const result = await loginWithEmail({
      email: 'john@example.com',
      password: 'SecurePass123!'
    });
    
    console.log('✅ Login successful!', result);
    // Navigate to home page
  } catch (error) {
    console.error('❌ Login failed:', error.message);
    alert(error.message);
  }
};
```

### Login with Phone

```javascript
const handlePhoneLogin = async () => {
  try {
    const result = await loginWithPhone({
      phone: '+919876543210',
      password: 'SecurePass123!'
    });
    
    console.log('✅ Login successful!', result);
    // Navigate to home page
  } catch (error) {
    console.error('❌ Login failed:', error.message);
    alert(error.message);
  }
};
```

### Google Sign-In

```javascript
const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithGoogle();
    
    console.log('✅ Google sign-in successful!', result);
    // Navigate to home page
  } catch (error) {
    console.error('❌ Google sign-in failed:', error.message);
    alert(error.message);
  }
};
```

### Apple Sign-In

```javascript
const handleAppleSignIn = async () => {
  try {
    const result = await signInWithApple();
    
    console.log('✅ Apple sign-in successful!', result);
    // Navigate to home page
  } catch (error) {
    console.error('❌ Apple sign-in failed:', error.message);
    alert(error.message);
  }
};
```

### Verify OTP

```javascript
const handleVerifyOTP = async (phone, otp) => {
  try {
    const result = await verifyOTP({
      phone: phone,
      otp: otp
    });
    
    console.log('✅ OTP verified!', result);
    // User is logged in after successful OTP verification
    // Navigate to home page
  } catch (error) {
    console.error('❌ OTP verification failed:', error.message);
    alert(error.message);
  }
};
```

### Resend OTP

```javascript
const handleResendOTP = async (phone) => {
  try {
    const result = await resendOTP({
      phone: phone
    });
    
    console.log('✅ OTP sent!', result.message);
    alert('OTP sent successfully!');
  } catch (error) {
    console.error('❌ Failed to send OTP:', error.message);
    alert(error.message);
  }
};
```

### Forgot Password

```javascript
const handleForgotPassword = async (email) => {
  try {
    const result = await forgotPassword({
      email: email
    });
    
    console.log('✅ Password reset email sent!', result.message);
    alert('Password reset link sent to your email!');
  } catch (error) {
    console.error('❌ Failed to send reset email:', error.message);
    alert(error.message);
  }
};
```

### Reset Password

```javascript
const handleResetPassword = async (token, newPassword, confirmPassword) => {
  try {
    const result = await resetPasswordWithToken({
      token: token,
      password: newPassword,
      confirmPassword: confirmPassword
    });
    
    console.log('✅ Password reset successful!', result.message);
    alert('Password reset successful! Please login with your new password.');
    // Navigate to login page
  } catch (error) {
    console.error('❌ Password reset failed:', error.message);
    alert(error.message);
  }
};
```

### Logout

```javascript
const handleLogout = async () => {
  try {
    const result = await logout();
    
    console.log('✅ Logout successful!', result.message);
    // Navigate to login page
  } catch (error) {
    console.error('❌ Logout failed:', error.message);
  }
};
```

---

## 🧪 Testing Authentication

### Test Backend Connection

Create a test file or run in browser console:

```javascript
// Test Local Backend
import api from './services/api';

const testConnection = async () => {
  try {
    const response = await api.get('/config/razorpay-key');
    console.log('✅ Backend connected!', response.data);
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
};

testConnection();
```

### Test Registration

```javascript
import { registerWithEmail } from './services/authService';

const testRegister = async () => {
  try {
    const result = await registerWithEmail({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+919999999999',
      password: 'Test123!'
    });
    console.log('✅ Registration test passed!', result);
  } catch (error) {
    console.error('❌ Registration test failed:', error);
  }
};

testRegister();
```

### Test Login

```javascript
import { loginWithEmail } from './services/authService';

const testLogin = async () => {
  try {
    const result = await loginWithEmail({
      email: 'test@example.com',
      password: 'Test123!'
    });
    console.log('✅ Login test passed!', result);
  } catch (error) {
    console.error('❌ Login test failed:', error);
  }
};

testLogin();
```

---

## 🔄 Complete Authentication Flow

### Registration Flow:
1. User fills registration form
2. Call `registerWithEmail(userData)`
3. Creates Firebase account
4. Registers in backend database
5. Returns JWT token
6. Token stored in localStorage
7. User redirected to home page

### Login Flow:
1. User enters credentials
2. Call `loginWithEmail(credentials)` or `loginWithPhone(credentials)`
3. Firebase authentication (for email)
4. Backend authentication
5. Returns JWT token
6. Token stored in localStorage
7. User redirected to home page

### OTP Verification Flow:
1. User requests OTP (during registration or login)
2. Backend sends OTP via SMS/Email
3. User enters OTP
4. Call `verifyOTP({phone, otp})`
5. Backend validates OTP
6. Returns JWT token
7. User logged in

### Password Reset Flow:
1. User clicks "Forgot Password"
2. Call `forgotPassword({email})`
3. Backend sends reset link to email
4. User clicks link (gets token)
5. User enters new password
6. Call `resetPasswordWithToken({token, password, confirmPassword})`
7. Password updated in database
8. User redirected to login page

---

## 🛡️ Token Management

### How Tokens are Handled:

1. **Storage**: Tokens are stored in `localStorage` with key `'token'`
2. **Auto-injection**: Axios interceptor automatically adds token to all requests
3. **Expiration**: 401 errors trigger automatic logout and redirect to login
4. **Cleanup**: Logout removes token from localStorage

### Manual Token Operations:

```javascript
// Get token
const token = localStorage.getItem('token');

// Set token
localStorage.setItem('token', 'your-jwt-token');

// Remove token
localStorage.removeItem('token');

// Check if user is authenticated
import { isAuthenticated } from './services/authService';
const isLoggedIn = isAuthenticated();
```

---

## 🔐 Protected Routes

Example of protecting routes in your app:

```javascript
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Usage in routes
<Route path="/profile" element={
  <PrivateRoute>
    <Profile />
  </PrivateRoute>
} />
```

---

## 📱 Social Authentication Setup

### Google Sign-In
Already configured in Firebase. Just call:
```javascript
import { signInWithGoogle } from './services/authService';
await signInWithGoogle();
```

### Apple Sign-In
Already configured in Firebase. Just call:
```javascript
import { signInWithApple } from './services/authService';
await signInWithApple();
```

---

## ⚠️ Error Handling

All auth functions return standardized error objects:

```javascript
{
  message: 'Human-readable error message',
  code: 'ERROR_CODE'
}
```

### Common Error Codes:
- `auth/email-already-in-use` - Email already registered
- `auth/invalid-email` - Invalid email format
- `auth/user-not-found` - User doesn't exist
- `auth/wrong-password` - Incorrect password
- `auth/weak-password` - Password too weak
- `PASSWORD_MISMATCH` - Passwords don't match

### Error Handling Example:

```javascript
try {
  await loginWithEmail(credentials);
} catch (error) {
  switch(error.code) {
    case 'auth/user-not-found':
      alert('No account found with this email');
      break;
    case 'auth/wrong-password':
      alert('Incorrect password');
      break;
    default:
      alert(error.message);
  }
}
```

---

## 🚀 Next Steps

### 1. Start Backend Server (for local development)

```bash
cd oct-7-backend-admin-main
npm install
npm start
# Backend runs on http://localhost:8000
```

### 2. Start Frontend Server

```bash
npm run dev
# Frontend runs on http://localhost:5173
```

### 3. Test Authentication

1. Open browser to `http://localhost:5173`
2. Navigate to registration page
3. Fill in form and submit
4. Check console for success message
5. Verify token in localStorage
6. Test login
7. Test logout

### 4. Deploy to Production

When deploying to production:
- Ensure `.env.production` has correct API URL
- Build project: `npm run build`
- Deploy to hosting (Netlify/Vercel)
- Verify production API connection

---

## 📞 Support

If you encounter any issues:

1. **Check Backend is Running**: `curl http://localhost:8000/api/config/razorpay-key`
2. **Check Environment Variables**: `console.log(import.meta.env.VITE_API_URL)`
3. **Check Browser Console**: Look for API errors
4. **Check Network Tab**: Verify API requests are being sent
5. **Check Token**: `localStorage.getItem('token')`

---

## ✅ Authentication Setup Checklist

- [x] Environment variables configured
- [x] API service created with interceptors
- [x] All auth endpoints implemented
- [x] Firebase integration complete
- [x] Token management setup
- [x] Error handling implemented
- [x] Social login (Google/Apple) configured
- [x] OTP verification setup
- [x] Password reset flow implemented
- [x] Logout functionality working

---

## 🎉 You're All Set!

Your authentication system is now fully integrated with the backend API. You can:

✅ Register new users
✅ Login with email/phone
✅ Social login (Google/Apple)
✅ Verify OTP
✅ Reset passwords
✅ Manage user sessions
✅ Handle tokens automatically
✅ Protect routes

**Start building your app features!** 🚀

---

**Last Updated**: October 19, 2025
**API Version**: 1.0.0
**Documentation**: Complete
