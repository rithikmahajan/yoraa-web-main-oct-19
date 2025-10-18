# 🔐 Authentication Endpoints - Complete Setup Guide

## ✅ All Authentication Endpoints Configured!

Your Yoraa.in frontend now has **all 8 authentication endpoints** fully integrated and ready to use.

---

## 📋 Authentication Endpoints Overview

### 1️⃣ **Register New User**
```javascript
POST /api/auth/register
```

**Function:** `registerWithEmail(userData)`

**Parameters:**
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+919876543210",
  password: "SecurePass@123"
}
```

**Usage Example:**
```javascript
import { registerWithEmail } from '@/services/authService';

const handleRegister = async () => {
  try {
    const result = await registerWithEmail({
      name: "John Doe",
      email: "john@example.com",
      phone: "+919876543210",
      password: "SecurePass@123"
    });
    
    console.log('User registered:', result.user);
    console.log('Token stored automatically');
    // Redirect to home or dashboard
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
};
```

---

### 2️⃣ **Login with Email/Phone**
```javascript
POST /api/auth/login
```

**Functions:** 
- `loginWithEmail(credentials)` - For email login
- `loginWithPhone(credentials)` - For phone login

**Parameters (Email):**
```javascript
{
  email: "john@example.com",
  password: "SecurePass@123"
}
```

**Parameters (Phone):**
```javascript
{
  phone: "+919876543210",
  password: "SecurePass@123"
}
```

**Usage Example:**
```javascript
import { loginWithEmail, loginWithPhone } from '@/services/authService';

// Login with Email
const handleEmailLogin = async () => {
  try {
    const result = await loginWithEmail({
      email: "john@example.com",
      password: "SecurePass@123"
    });
    console.log('Logged in:', result.user);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};

// Login with Phone
const handlePhoneLogin = async () => {
  try {
    const result = await loginWithPhone({
      phone: "+919876543210",
      password: "SecurePass@123"
    });
    console.log('Logged in:', result.user);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};
```

---

### 3️⃣ **Social Login (Google/Apple)**
```javascript
POST /api/auth/social-login
```

**Functions:**
- `signInWithGoogle()` - Google OAuth login
- `signInWithApple()` - Apple ID login

**Usage Example:**
```javascript
import { signInWithGoogle, signInWithApple } from '@/services/authService';

// Google Sign-In
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithGoogle();
    console.log('Google login successful:', result.user);
    // Redirect to home
  } catch (error) {
    console.error('Google login failed:', error.message);
  }
};

// Apple Sign-In
const handleAppleLogin = async () => {
  try {
    const result = await signInWithApple();
    console.log('Apple login successful:', result.user);
    // Redirect to home
  } catch (error) {
    console.error('Apple login failed:', error.message);
  }
};
```

---

### 4️⃣ **Verify OTP**
```javascript
POST /api/auth/verify-otp
```

**Function:** `verifyOTP(data)`

**Parameters:**
```javascript
{
  phone: "+919876543210",  // or email: "john@example.com"
  otp: "123456"
}
```

**Usage Example:**
```javascript
import { verifyOTP } from '@/services/authService';

const handleVerifyOTP = async (otpCode) => {
  try {
    const result = await verifyOTP({
      phone: "+919876543210",
      otp: otpCode
    });
    
    console.log('OTP verified:', result.message);
    console.log('User:', result.user);
    // Redirect to home or complete registration
  } catch (error) {
    console.error('OTP verification failed:', error.message);
  }
};
```

---

### 5️⃣ **Resend OTP**
```javascript
POST /api/auth/resend-otp
```

**Function:** `resendOTP(data)`

**Parameters:**
```javascript
{
  phone: "+919876543210"  // or email: "john@example.com"
}
```

**Usage Example:**
```javascript
import { resendOTP } from '@/services/authService';

const handleResendOTP = async () => {
  try {
    const result = await resendOTP({
      phone: "+919876543210"
    });
    
    console.log('OTP resent:', result.message);
    // Show success message to user
  } catch (error) {
    console.error('Resend OTP failed:', error.message);
  }
};
```

---

### 6️⃣ **Logout**
```javascript
POST /api/auth/logout
```

**Function:** `logout()`

**Usage Example:**
```javascript
import { logout } from '@/services/authService';

const handleLogout = async () => {
  try {
    const result = await logout();
    console.log('Logged out successfully');
    // Redirect to login page
    window.location.href = '/login';
  } catch (error) {
    console.error('Logout failed:', error.message);
    // Still redirect even if logout fails
    window.location.href = '/login';
  }
};
```

---

### 7️⃣ **Forgot Password**
```javascript
POST /api/auth/forgot-password
```

**Function:** `forgotPassword(data)`

**Parameters:**
```javascript
{
  email: "john@example.com"
}
```

**Usage Example:**
```javascript
import { forgotPassword } from '@/services/authService';

const handleForgotPassword = async (email) => {
  try {
    const result = await forgotPassword({ email });
    
    console.log('Password reset email sent:', result.message);
    // Show success message and redirect to check email page
  } catch (error) {
    console.error('Failed to send reset email:', error.message);
  }
};
```

---

### 8️⃣ **Reset Password with Token**
```javascript
POST /api/auth/reset-password
```

**Function:** `resetPasswordWithToken(data)`

**Parameters:**
```javascript
{
  token: "reset-token-from-email",
  password: "NewSecurePass@123",
  confirmPassword: "NewSecurePass@123"
}
```

**Usage Example:**
```javascript
import { resetPasswordWithToken } from '@/services/authService';

const handleResetPassword = async (token, newPassword, confirmPassword) => {
  try {
    const result = await resetPasswordWithToken({
      token,
      password: newPassword,
      confirmPassword
    });
    
    console.log('Password reset successful:', result.message);
    // Redirect to login page
    window.location.href = '/login';
  } catch (error) {
    console.error('Password reset failed:', error.message);
  }
};
```

---

## 🧪 Testing Authentication Endpoints

### Quick Test in Browser Console

1. **Open your app in browser**
2. **Open Developer Console** (F12)
3. **Import the test module:**

```javascript
import testAuth from '@/services/testAuthEndpoints';

// Test individual endpoints
await testAuth.testRegister();
await testAuth.testLoginEmail();
await testAuth.testVerifyOTP();
await testAuth.testResendOTP();
await testAuth.testForgotPassword();
await testAuth.testResetPassword();
await testAuth.testLogout();

// Or run all tests at once
await testAuth.runAllAuthTests();
```

### Using the Test HTML Page

Open `test-auth-endpoints.html` in your browser to test all endpoints interactively.

---

## 📦 Complete Authentication Flow Examples

### Example 1: Email Registration + OTP Verification
```javascript
import { registerWithEmail, verifyOTP } from '@/services/authService';

// Step 1: Register
const register = async () => {
  const result = await registerWithEmail({
    name: "John Doe",
    email: "john@example.com",
    phone: "+919876543210",
    password: "SecurePass@123"
  });
  
  // OTP sent to phone/email
  console.log('Registration successful, verify OTP');
};

// Step 2: Verify OTP
const verify = async (otpCode) => {
  const result = await verifyOTP({
    phone: "+919876543210",
    otp: otpCode
  });
  
  console.log('Account verified!');
  // User is now logged in
};
```

### Example 2: Phone Login
```javascript
import { loginWithPhone } from '@/services/authService';

const phoneLogin = async () => {
  const result = await loginWithPhone({
    phone: "+919876543210",
    password: "SecurePass@123"
  });
  
  console.log('Logged in successfully');
  // Redirect to home
};
```

### Example 3: Password Reset Flow
```javascript
import { forgotPassword, resetPasswordWithToken } from '@/services/authService';

// Step 1: Request password reset
const requestReset = async (email) => {
  await forgotPassword({ email });
  console.log('Check your email for reset link');
};

// Step 2: Reset password (from email link)
const resetPass = async (token) => {
  await resetPasswordWithToken({
    token,
    password: "NewPassword@123",
    confirmPassword: "NewPassword@123"
  });
  
  console.log('Password changed, please login');
};
```

### Example 4: Social Login
```javascript
import { signInWithGoogle, signInWithApple } from '@/services/authService';

// Google
const googleLogin = async () => {
  const result = await signInWithGoogle();
  console.log('Logged in with Google');
};

// Apple
const appleLogin = async () => {
  const result = await signInWithApple();
  console.log('Logged in with Apple');
};
```

---

## 🔧 API Configuration

### Environment Variables

Make sure your `.env` file has the correct backend URL:

```env
# Development
VITE_API_URL=http://localhost:8000/api

# Production
VITE_API_URL=https://api.yoraa.in.net/api
```

### Backend URL Configuration

The API automatically uses the environment variable. You can also override it:

```javascript
// In src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
```

---

## 📝 Response Format

All endpoints return data in this format:

```javascript
// Success Response
{
  success: true,
  message: "Operation successful",
  user: { ... },           // User object (if applicable)
  data: { ... }            // Additional data
}

// Error Response (thrown as exception)
{
  message: "Error message",
  code: "ERROR_CODE"
}
```

---

## 🔒 Authentication State Management

### Token Storage
Tokens are automatically stored in `localStorage`:
```javascript
localStorage.getItem('token')        // JWT token
localStorage.getItem('userData')     // User info
```

### Auto Token Injection
The API client automatically adds the token to all requests:
```javascript
Authorization: Bearer <token>
```

### Auto Logout on 401
If the token expires (401 response), user is automatically logged out and redirected to login.

---

## 🎯 Helper Utilities

```javascript
import { 
  isAuthenticated,
  getCurrentFirebaseUser,
  getFirebaseToken,
  onAuthStateChanged 
} from '@/services/authService';

// Check if user is logged in
const loggedIn = isAuthenticated();

// Get current Firebase user
const firebaseUser = getCurrentFirebaseUser();

// Get Firebase ID token
const token = await getFirebaseToken();

// Listen to auth state changes
onAuthStateChanged((user) => {
  if (user) {
    console.log('User logged in:', user);
  } else {
    console.log('User logged out');
  }
});
```

---

## 🚀 Integration with React Components

### Example: Login Component
```javascript
import React, { useState } from 'react';
import { loginWithEmail } from '@/services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await loginWithEmail({ email, password });
      navigate('/'); // Redirect to home
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

---

## 📚 Files Updated

1. ✅ **`src/services/authService.js`** - All 8 auth endpoints implemented
2. ✅ **`src/services/apiEndpoints.js`** - API endpoint definitions
3. ✅ **`src/services/api.js`** - Axios instance with interceptors
4. ✅ **`src/services/testAuthEndpoints.js`** - Testing suite
5. ✅ **`src/utils/auth.js`** - Auth helper utilities

---

## 🎉 You're All Set!

All authentication endpoints are now configured and ready to use. Start building your authentication flows with confidence!

### Next Steps:
1. Test each endpoint using the test suite
2. Integrate auth functions into your components
3. Customize error handling and UI feedback
4. Add loading states and form validation
5. Implement protected routes

---

## 📞 Need Help?

- Check the test suite: `src/services/testAuthEndpoints.js`
- Review example components in `src/examples/`
- See API documentation: `API_SETUP_README.md`

Happy coding! 🚀
