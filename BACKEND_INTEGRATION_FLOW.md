# 🔄 Backend Integration Flow Diagram

## 📊 Overall Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         YORAA.IN WEBSITE                        │
│                    (React + Vite Frontend)                      │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Pages/     │  │  Components/ │  │   Services/  │        │
│  │   Login.jsx  │  │  Header.jsx  │  │   api.js     │        │
│  │   Home.jsx   │  │  Cart.jsx    │  │   authService│        │
│  │   Product    │  │  etc.        │  │   .js        │        │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                 │                  │                 │
│         └─────────────────┴──────────────────┘                 │
│                           │                                     │
└───────────────────────────┼─────────────────────────────────────┘
                            │
                    ┌───────▼────────┐
                    │  Axios Instance │
                    │  with JWT Token │
                    └───────┬────────┘
                            │
                            │ HTTPS/HTTP
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                    API.YORAA.IN.NET                             │
│                   (Backend API Server)                          │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              API Routes (/api/*)                         │  │
│  │                                                          │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐       │  │
│  │  │   Auth     │  │   User     │  │  Products  │       │  │
│  │  │  /auth/*   │  │  /user/*   │  │  /items/*  │       │  │
│  │  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘       │  │
│  │        │               │               │               │  │
│  └────────┼───────────────┼───────────────┼───────────────┘  │
│           │               │               │                   │
│  ┌────────▼───────────────▼───────────────▼───────────────┐  │
│  │          Controllers & Middleware                       │  │
│  │      (JWT Validation, Input Validation, etc.)          │  │
│  └────────────────────────┬────────────────────────────────┘  │
│                           │                                   │
└───────────────────────────┼───────────────────────────────────┘
                            │
                    ┌───────▼────────┐
                    │   MongoDB      │
                    │   Database     │
                    │   (yoraa1)     │
                    └────────────────┘
```

---

## 🔐 Authentication Flow

### 1. User Registration Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │ Frontend │         │ Backend  │         │ Database │
│ Browser  │         │  (React) │         │   API    │         │ MongoDB  │
└────┬─────┘         └────┬─────┘         └────┬─────┘         └────┬─────┘
     │                    │                    │                    │
     │ 1. Fill Form       │                    │                    │
     │ (name, email,      │                    │                    │
     │  phone, password)  │                    │                    │
     │────────────────────>                    │                    │
     │                    │                    │                    │
     │                    │ 2. POST /auth/     │                    │
     │                    │    register        │                    │
     │                    │    {userData}      │                    │
     │                    │───────────────────>│                    │
     │                    │                    │                    │
     │                    │                    │ 3. Validate Input  │
     │                    │                    │    Check if user   │
     │                    │                    │    exists          │
     │                    │                    │                    │
     │                    │                    │ 4. Hash Password   │
     │                    │                    │                    │
     │                    │                    │                    │
     │                    │                    │ 5. INSERT User     │
     │                    │                    │───────────────────>│
     │                    │                    │                    │
     │                    │                    │ 6. User Created    │
     │                    │                    │<───────────────────│
     │                    │                    │                    │
     │                    │                    │ 7. Generate JWT    │
     │                    │                    │    Token           │
     │                    │                    │                    │
     │                    │ 8. Response:       │                    │
     │                    │    {token, user}   │                    │
     │                    │<───────────────────│                    │
     │                    │                    │                    │
     │                    │ 9. Store token in  │                    │
     │                    │    localStorage    │                    │
     │                    │                    │                    │
     │ 10. Redirect to    │                    │                    │
     │     Dashboard      │                    │                    │
     │<────────────────────                    │                    │
     │                    │                    │                    │
```

### 2. User Login Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │ Frontend │         │ Backend  │         │ Database │
│ Browser  │         │  (React) │         │   API    │         │ MongoDB  │
└────┬─────┘         └────┬─────┘         └────┬─────┘         └────┬─────┘
     │                    │                    │                    │
     │ 1. Enter Email/    │                    │                    │
     │    Phone + Password│                    │                    │
     │────────────────────>                    │                    │
     │                    │                    │                    │
     │                    │ 2. POST /auth/     │                    │
     │                    │    login           │                    │
     │                    │    {identifier,    │                    │
     │                    │     password}      │                    │
     │                    │───────────────────>│                    │
     │                    │                    │                    │
     │                    │                    │ 3. Find User by    │
     │                    │                    │    Email/Phone     │
     │                    │                    │───────────────────>│
     │                    │                    │                    │
     │                    │                    │ 4. User Data       │
     │                    │                    │<───────────────────│
     │                    │                    │                    │
     │                    │                    │ 5. Verify Password │
     │                    │                    │    (bcrypt.compare)│
     │                    │                    │                    │
     │                    │                    │ 6. Generate JWT    │
     │                    │                    │    Token           │
     │                    │                    │                    │
     │                    │ 7. Response:       │                    │
     │                    │    {token, user}   │                    │
     │                    │<───────────────────│                    │
     │                    │                    │                    │
     │                    │ 8. Store token in  │                    │
     │                    │    localStorage    │                    │
     │                    │                    │                    │
     │ 9. Redirect to Home│                    │                    │
     │<────────────────────                    │                    │
     │                    │                    │                    │
```

### 3. Protected API Call Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │ Frontend │         │ Backend  │         │ Database │
│ Browser  │         │  (React) │         │   API    │         │ MongoDB  │
└────┬─────┘         └────┬─────┘         └────┬─────┘         └────┬─────┘
     │                    │                    │                    │
     │ 1. Click "View     │                    │                    │
     │    Profile"        │                    │                    │
     │────────────────────>                    │                    │
     │                    │                    │                    │
     │                    │ 2. Get token from  │                    │
     │                    │    localStorage    │                    │
     │                    │                    │                    │
     │                    │ 3. GET /user/      │                    │
     │                    │    profile         │                    │
     │                    │    Header:         │                    │
     │                    │    Authorization:  │                    │
     │                    │    Bearer <token>  │                    │
     │                    │───────────────────>│                    │
     │                    │                    │                    │
     │                    │                    │ 4. Verify JWT      │
     │                    │                    │    Token           │
     │                    │                    │                    │
     │                    │                    │ 5. Extract user ID │
     │                    │                    │    from token      │
     │                    │                    │                    │
     │                    │                    │ 6. FIND user by ID │
     │                    │                    │───────────────────>│
     │                    │                    │                    │
     │                    │                    │ 7. User Data       │
     │                    │                    │<───────────────────│
     │                    │                    │                    │
     │                    │ 8. Response:       │                    │
     │                    │    {user profile}  │                    │
     │                    │<───────────────────│                    │
     │                    │                    │                    │
     │ 9. Display Profile │                    │                    │
     │<────────────────────                    │                    │
     │                    │                    │                    │
```

### 4. Token Expiry Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │ Frontend │         │ Backend  │
│ Browser  │         │  (React) │         │   API    │
└────┬─────┘         └────┬─────┘         └────┬─────┘
     │                    │                    │
     │ 1. Make API Call   │                    │
     │    (after 7 days)  │                    │
     │────────────────────>                    │
     │                    │                    │
     │                    │ 2. GET /api/*      │
     │                    │    with expired    │
     │                    │    token           │
     │                    │───────────────────>│
     │                    │                    │
     │                    │                    │ 3. Verify Token
     │                    │                    │    (EXPIRED!)
     │                    │                    │
     │                    │ 4. 401 Unauthorized│
     │                    │    {message:       │
     │                    │     "Token expired"│
     │                    │<───────────────────│
     │                    │                    │
     │                    │ 5. Interceptor     │
     │                    │    catches 401     │
     │                    │                    │
     │                    │ 6. Clear           │
     │                    │    localStorage    │
     │                    │                    │
     │ 7. Redirect to     │                    │
     │    Login Page      │                    │
     │<────────────────────                    │
     │                    │                    │
```

---

## 🛒 Sample E-commerce Flow

### Add to Cart Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │ Frontend │         │ Backend  │         │ Database │
└────┬─────┘         └────┬─────┘         └────┬─────┘         └────┬─────┘
     │                    │                    │                    │
     │ 1. Click "Add to   │                    │                    │
     │    Cart" on Product│                    │                    │
     │────────────────────>                    │                    │
     │                    │                    │                    │
     │                    │ 2. POST /cart/add  │                    │
     │                    │    {itemId, qty}   │                    │
     │                    │    + Auth Token    │                    │
     │                    │───────────────────>│                    │
     │                    │                    │                    │
     │                    │                    │ 3. Verify Token    │
     │                    │                    │    & Get User ID   │
     │                    │                    │                    │
     │                    │                    │ 4. Check Product   │
     │                    │                    │    Exists & Stock  │
     │                    │                    │───────────────────>│
     │                    │                    │<───────────────────│
     │                    │                    │                    │
     │                    │                    │ 5. Add/Update Cart │
     │                    │                    │───────────────────>│
     │                    │                    │<───────────────────│
     │                    │                    │                    │
     │                    │ 6. Response:       │                    │
     │                    │    {cart data}     │                    │
     │                    │<───────────────────│                    │
     │                    │                    │                    │
     │ 7. Update Cart     │                    │                    │
     │    Badge (5 items) │                    │                    │
     │<────────────────────                    │                    │
     │                    │                    │                    │
```

---

## 📋 Request/Response Examples

### Example 1: Login Request

```http
POST /api/auth/login HTTP/1.1
Host: api.yoraa.in.net
Content-Type: application/json

{
  "identifier": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzBhZjBiMjExZmYzMzAwMTI4OWYzOTAiLCJpYXQiOjE3Mjg3ODM5ODYsImV4cCI6MTcyOTM4ODc4Nn0.abc123def456",
    "user": {
      "id": "670af0b211ff33001289f390",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "avatar": "https://example.com/avatar.jpg"
    }
  },
  "statusCode": 200
}
```

### Example 2: Get Profile (Protected)

```http
GET /api/user/profile HTTP/1.1
Host: api.yoraa.in.net
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Profile fetched successfully",
  "data": {
    "user": {
      "id": "670af0b211ff33001289f390",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "avatar": "https://example.com/avatar.jpg",
      "addresses": [
        {
          "id": "addr_123",
          "street": "123 Main St",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pincode": "400001",
          "isDefault": true
        }
      ],
      "createdAt": "2025-10-12T10:30:00Z"
    }
  },
  "statusCode": 200
}
```

### Example 3: Add to Cart

```http
POST /api/cart/add HTTP/1.1
Host: api.yoraa.in.net
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "itemId": "product_456",
  "quantity": 2,
  "size": "M",
  "color": "Blue"
}
```

**Response:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "message": "Item added to cart",
  "data": {
    "cart": {
      "userId": "670af0b211ff33001289f390",
      "items": [
        {
          "itemId": "product_456",
          "name": "Nike Air Max",
          "price": 8999,
          "quantity": 2,
          "size": "M",
          "color": "Blue",
          "image": "https://...",
          "subtotal": 17998
        }
      ],
      "totalItems": 2,
      "totalAmount": 17998
    }
  },
  "statusCode": 201
}
```

---

## 🔧 Frontend Code Structure

```
src/
├── services/
│   ├── api.js                 # Axios instance with interceptors
│   ├── apiEndpoints.js        # All API endpoint definitions
│   └── authService.js         # Authentication functions
│
├── hooks/
│   └── useApi.js              # Custom hook for API calls
│
├── store/
│   └── slices/
│       ├── authSlice.js       # Redux auth state
│       └── userSlice.js       # Redux user state
│
└── pages/
    └── Auth/
        ├── Login.jsx          # Login page
        ├── Register.jsx       # Registration page
        └── ForgotPassword.jsx # Password reset
```

---

## ✅ Integration Checklist

### Frontend Setup
- [x] Axios instance created with base URL
- [x] Request interceptor adds JWT token
- [x] Response interceptor handles 401 errors
- [x] Token stored in localStorage
- [x] All auth endpoints implemented
- [x] Error handling implemented
- [x] Environment variables configured

### Backend Requirements (To Verify)
- [ ] All auth endpoints implemented
- [ ] JWT token generation working
- [ ] Token verification middleware working
- [ ] Password hashing with bcrypt
- [ ] CORS configured for frontend origins
- [ ] Rate limiting on auth endpoints
- [ ] Input validation on all endpoints
- [ ] Error responses follow standard format

### Testing
- [ ] Can register new user
- [ ] Can login with email/password
- [ ] Can login with phone/password
- [ ] Token is returned on login
- [ ] Token works for protected endpoints
- [ ] 401 triggers logout and redirect
- [ ] Forgot password sends email
- [ ] Reset password works with token
- [ ] OTP verification works
- [ ] Social login works

---

**Document Version**: 1.0  
**Created**: October 19, 2025  
**Purpose**: Share with backend team for integration verification
