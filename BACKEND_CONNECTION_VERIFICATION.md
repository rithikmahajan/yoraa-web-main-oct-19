# 🔗 Backend Connection Verification Document

**Date**: October 19, 2025  
**Frontend**: Yoraa.in Web Application  
**Backend API**: api.yoraa.in.net  
**Purpose**: Verify frontend-backend integration and API connectivity

---

## 📋 Executive Summary

This document outlines how the Yoraa.in frontend application connects to the backend API. Please verify that all endpoints, request formats, and authentication mechanisms align with your backend implementation.

---

## 🌐 API Configuration

### Base URLs

| Environment | Base URL | Usage |
|------------|----------|-------|
| **Local Development** | `http://localhost:8000/api` | Testing on developer machines |
| **Production** | `https://api.yoraa.in.net/api` | Live production environment |

### Current Configuration
```javascript
// File: src/services/api.js
const API_BASE_URL = process.env.VITE_API_URL || 
                     process.env.REACT_APP_API_URL || 
                     'https://api.yoraa.in.net/api';
```

### Environment Files
```env
# .env.local (Development)
VITE_API_URL=http://localhost:8000/api
VITE_ENV=development

# .env.production (Production)
VITE_API_URL=https://api.yoraa.in.net/api
VITE_ENV=production
```

---

## 🔐 Authentication Flow

### 1. Token-Based Authentication

We're implementing JWT token-based authentication with the following flow:

```
User Login → Backend Issues JWT Token → Store in localStorage → 
Include in all API requests → Refresh on expiry
```

### 2. Request Headers

```javascript
// All authenticated requests include:
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <JWT_TOKEN>'
}
```

### 3. Token Storage

```javascript
// Token stored in browser localStorage
localStorage.setItem('yoraa_auth_token', token);

// Token retrieved for API calls
const token = localStorage.getItem('yoraa_auth_token');
```

### 4. Token Expiry Handling

```javascript
// Interceptor handles 401 responses
if (error.response?.status === 401) {
  localStorage.removeItem('yoraa_auth_token');
  // Redirect to login
  window.location.href = '/login';
}
```

---

## 📡 Authentication Endpoints Implementation

### 1. User Registration

**Endpoint**: `POST /api/auth/register`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "SecurePass123!"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210"
    }
  }
}
```

**Frontend Implementation**:
```javascript
// src/services/authService.js
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', {
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password
  });
  
  // Store token
  if (response.data.success && response.data.data.token) {
    localStorage.setItem('yoraa_auth_token', response.data.data.token);
  }
  
  return response.data;
};
```

---

### 2. User Login (Email/Phone + Password)

**Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
  "identifier": "john@example.com",
  "password": "SecurePass123!"
}
```
OR
```json
{
  "identifier": "9876543210",
  "password": "SecurePass123!"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "avatar": "https://..."
    }
  }
}
```

**Frontend Implementation**:
```javascript
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', {
    identifier: credentials.emailOrPhone,
    password: credentials.password
  });
  
  if (response.data.success && response.data.data.token) {
    localStorage.setItem('yoraa_auth_token', response.data.data.token);
  }
  
  return response.data;
};
```

---

### 3. Social Login (Google/Apple)

**Endpoint**: `POST /api/auth/social-login`

**Request Body**:
```json
{
  "provider": "google",
  "idToken": "google_id_token_here",
  "email": "john@example.com",
  "name": "John Doe",
  "avatar": "https://..."
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Social login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "provider": "google"
    },
    "isNewUser": false
  }
}
```

**Frontend Implementation**:
```javascript
export const socialLogin = async (provider, authData) => {
  const response = await api.post('/auth/social-login', {
    provider: provider, // 'google' or 'apple'
    idToken: authData.idToken,
    email: authData.email,
    name: authData.name,
    avatar: authData.avatar
  });
  
  if (response.data.success && response.data.data.token) {
    localStorage.setItem('yoraa_auth_token', response.data.data.token);
  }
  
  return response.data;
};
```

---

### 4. OTP Verification

**Endpoint**: `POST /api/auth/verify-otp`

**Request Body**:
```json
{
  "phone": "9876543210",
  "otp": "123456"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "verified": true
  }
}
```

**Frontend Implementation**:
```javascript
export const verifyOTP = async (phone, otp) => {
  const response = await api.post('/auth/verify-otp', {
    phone: phone,
    otp: otp
  });
  
  if (response.data.success && response.data.data.token) {
    localStorage.setItem('yoraa_auth_token', response.data.data.token);
  }
  
  return response.data;
};
```

---

### 5. Resend OTP

**Endpoint**: `POST /api/auth/resend-otp`

**Request Body**:
```json
{
  "phone": "9876543210"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "otpSent": true,
    "expiresIn": 300
  }
}
```

**Frontend Implementation**:
```javascript
export const resendOTP = async (phone) => {
  const response = await api.post('/auth/resend-otp', {
    phone: phone
  });
  return response.data;
};
```

---

### 6. Logout

**Endpoint**: `POST /api/auth/logout`

**Request Headers**:
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Logout successful"
}
```

**Frontend Implementation**:
```javascript
export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  
  // Clear local storage
  localStorage.removeItem('yoraa_auth_token');
  localStorage.removeItem('yoraa_user');
  
  return response.data;
};
```

---

### 7. Forgot Password

**Endpoint**: `POST /api/auth/forgot-password`

**Request Body**:
```json
{
  "email": "john@example.com"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Password reset link sent to email",
  "data": {
    "emailSent": true
  }
}
```

**Frontend Implementation**:
```javascript
export const forgotPassword = async (email) => {
  const response = await api.post('/auth/forgot-password', {
    email: email
  });
  return response.data;
};
```

---

### 8. Reset Password

**Endpoint**: `POST /api/auth/reset-password`

**Request Body**:
```json
{
  "token": "reset_token_from_email",
  "newPassword": "NewSecurePass123!",
  "confirmPassword": "NewSecurePass123!"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Password reset successful",
  "data": {
    "passwordChanged": true
  }
}
```

**Frontend Implementation**:
```javascript
export const resetPassword = async (token, newPassword) => {
  const response = await api.post('/auth/reset-password', {
    token: token,
    newPassword: newPassword,
    confirmPassword: newPassword
  });
  return response.data;
};
```

---

## 🔄 Request/Response Interceptors

### Request Interceptor

```javascript
// File: src/services/api.js

api.interceptors.request.use(
  (config) => {
    // Add auth token to all requests
    const token = localStorage.getItem('yoraa_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request for debugging (development only)
    if (import.meta.env.DEV) {
      console.log(`📤 ${config.method.toUpperCase()} ${config.url}`, config.data);
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);
```

### Response Interceptor

```javascript
api.interceptors.response.use(
  (response) => {
    // Log successful response (development only)
    if (import.meta.env.DEV) {
      console.log(`✅ ${response.config.method.toUpperCase()} ${response.config.url}`, response.data);
    }
    return response;
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - Clear token and redirect to login
          localStorage.removeItem('yoraa_auth_token');
          localStorage.removeItem('yoraa_user');
          window.location.href = '/login';
          break;
          
        case 403:
          // Forbidden - Show error message
          console.error('Access forbidden:', data.message);
          break;
          
        case 404:
          // Not found
          console.error('Resource not found:', data.message);
          break;
          
        case 500:
          // Server error
          console.error('Server error:', data.message);
          break;
      }
      
      if (import.meta.env.DEV) {
        console.error(`❌ ${error.config.method.toUpperCase()} ${error.config.url}`, error.response.data);
      }
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.message);
    }
    
    return Promise.reject(error);
  }
);
```

---

## 📊 Expected Response Format

All backend responses should follow this standard format:

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  },
  "statusCode": 200
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message here",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error information"
  },
  "statusCode": 400
}
```

---

## 🧪 Testing & Verification

### 1. Manual Testing Commands

```bash
# Test Registration
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "password": "Test123!"
  }'

# Test Login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "test@example.com",
    "password": "Test123!"
  }'

# Test Protected Endpoint (replace TOKEN with actual JWT)
curl -X GET http://localhost:8000/api/user/profile \
  -H "Authorization: Bearer TOKEN"
```

### 2. Browser Console Testing

```javascript
// Test from browser console
const testAuth = async () => {
  try {
    // Test registration
    const registerResponse = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
        password: 'Test123!'
      })
    });
    const registerData = await registerResponse.json();
    console.log('Registration:', registerData);
    
    // Test login
    const loginResponse = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: 'test@example.com',
        password: 'Test123!'
      })
    });
    const loginData = await loginResponse.json();
    console.log('Login:', loginData);
    
  } catch (error) {
    console.error('Test failed:', error);
  }
};

testAuth();
```

---

## 🔒 CORS Configuration Required

The backend needs to whitelist the following origins:

```javascript
// Required CORS Origins
[
  'http://localhost:3000',      // React dev server
  'http://localhost:5173',      // Vite dev server
  'http://localhost:5174',      // Alternative Vite port
  'https://yoraa.in',           // Production frontend
  'https://www.yoraa.in',       // Production with www
]
```

### CORS Headers Required
```
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

---

## 🚨 Common Issues & Solutions

### Issue 1: CORS Errors
**Symptom**: "Access to XMLHttpRequest blocked by CORS policy"
**Solution**: Ensure backend CORS middleware includes frontend origin

### Issue 2: 401 Unauthorized
**Symptom**: All API calls return 401
**Solution**: 
- Verify token is being sent in Authorization header
- Check token format: `Bearer <token>`
- Verify token hasn't expired

### Issue 3: Network Timeout
**Symptom**: Requests timeout after 30 seconds
**Solution**: 
- Check if backend server is running
- Verify API URL is correct
- Check firewall/network settings

---

## ✅ Backend Team Checklist

Please verify the following:

### Authentication Endpoints
- [ ] `POST /api/auth/register` - User registration working
- [ ] `POST /api/auth/login` - Login with email/phone working
- [ ] `POST /api/auth/social-login` - Google/Apple login working
- [ ] `POST /api/auth/verify-otp` - OTP verification working
- [ ] `POST /api/auth/resend-otp` - Resend OTP working
- [ ] `POST /api/auth/logout` - Logout working
- [ ] `POST /api/auth/forgot-password` - Password reset email working
- [ ] `POST /api/auth/reset-password` - Password reset with token working

### Token Management
- [ ] JWT tokens being issued correctly
- [ ] Token expiry time configured (recommended: 7 days)
- [ ] Token refresh mechanism (if applicable)
- [ ] Token validation on protected routes

### Response Format
- [ ] All responses follow standard format (success/error)
- [ ] Appropriate HTTP status codes (200, 201, 400, 401, 404, 500)
- [ ] Error messages are descriptive and user-friendly
- [ ] Data structure matches frontend expectations

### Security
- [ ] Passwords hashed with bcrypt (min 10 rounds)
- [ ] JWT secret properly configured
- [ ] HTTPS enabled in production
- [ ] Rate limiting configured for auth endpoints
- [ ] Input validation on all endpoints

### CORS
- [ ] Frontend origins whitelisted
- [ ] Credentials allowed (for cookies/tokens)
- [ ] Preflight requests handled (OPTIONS)

---

## 📞 Contact Information

**Frontend Team**:
- Repository: yoraa-web-main-oct-19
- Environment: Development/Production
- Framework: React + Vite

**Questions for Backend Team**:
1. What is the token expiry time?
2. Is there a token refresh endpoint?
3. What is the rate limit for authentication endpoints?
4. Are there any additional headers required?
5. Is there a user verification process (email/phone)?
6. What is the password policy (min length, special chars)?

---

## 🎯 Next Steps

1. **Backend Team**: Review this document and confirm all endpoints match
2. **Backend Team**: Test all endpoints with provided curl commands
3. **Backend Team**: Verify CORS configuration
4. **Frontend Team**: Update any mismatches in request/response format
5. **Both Teams**: Coordinate on any additional requirements
6. **Both Teams**: Perform end-to-end integration testing

---

## 📝 Notes

- All authentication endpoints are prefixed with `/api/auth`
- Token storage uses browser localStorage (can be changed to cookies if needed)
- Token format is `Bearer <JWT_TOKEN>` in Authorization header
- All timestamps should be in ISO 8601 format
- Phone numbers should be in international format without special characters
- Email validation should follow RFC 5322 standard

---

**Document Version**: 1.0  
**Last Updated**: October 19, 2025  
**Status**: Pending Backend Verification ✅
