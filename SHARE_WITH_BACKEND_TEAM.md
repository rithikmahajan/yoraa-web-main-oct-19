# 📨 Backend Team - Integration Verification Request

**Date**: October 19, 2025  
**From**: Yoraa.in Frontend Team  
**To**: Backend Development Team  
**Subject**: Frontend-Backend Integration Verification

---

## 🎯 Purpose

We have completed the frontend implementation for connecting to your backend API. Please review our implementation and confirm that our request/response formats match your backend implementation.

---

## 📚 Documentation Files

We've prepared three comprehensive documents for your review:

### 1. **BACKEND_CONNECTION_VERIFICATION.md** 
Complete technical specification of how we're connecting to your backend
- All authentication endpoints we're calling
- Exact request/response formats we're using
- Headers and token management
- Error handling approach

### 2. **BACKEND_INTEGRATION_FLOW.md**
Visual flow diagrams showing:
- User registration flow
- Login flow
- Protected API calls
- Token expiry handling
- E-commerce workflows (add to cart, etc.)

### 3. **AUTH_ENDPOINTS_COMPLETE.md** (if available)
Detailed documentation of authentication endpoints

---

## 🔐 Authentication Endpoints We're Using

| Endpoint | Method | Purpose | Status |
|----------|--------|---------|--------|
| `/api/auth/register` | POST | User registration | ⏳ Needs verification |
| `/api/auth/login` | POST | Email/phone login | ⏳ Needs verification |
| `/api/auth/social-login` | POST | Google/Apple login | ⏳ Needs verification |
| `/api/auth/verify-otp` | POST | OTP verification | ⏳ Needs verification |
| `/api/auth/resend-otp` | POST | Resend OTP | ⏳ Needs verification |
| `/api/auth/logout` | POST | User logout | ⏳ Needs verification |
| `/api/auth/forgot-password` | POST | Request password reset | ⏳ Needs verification |
| `/api/auth/reset-password` | POST | Reset with token | ⏳ Needs verification |

---

## 🔑 Key Implementation Details

### 1. **Base URL Configuration**
```
Development: http://localhost:8000/api
Production:  https://api.yoraa.in.net/api
```

### 2. **Authentication Method**
- Using JWT tokens
- Stored in browser localStorage as `yoraa_auth_token`
- Sent in Authorization header: `Bearer <token>`

### 3. **Request Headers**
```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <JWT_TOKEN>'  // for protected routes
}
```

### 4. **Expected Response Format**
```json
{
  "success": true,
  "message": "Success message",
  "data": { /* response data */ },
  "statusCode": 200
}
```

---

## ❓ Questions for Backend Team

### Critical Questions:
1. **Token Expiry**: What is the JWT token expiry time? (We assume 7 days)
2. **Token Refresh**: Is there a token refresh endpoint?
3. **Response Format**: Do all your responses follow the format we specified?
4. **CORS**: Are these origins whitelisted?
   - `http://localhost:5173` (Vite dev)
   - `https://yoraa.in` (Production)
   - `https://www.yoraa.in` (Production with www)

### Authentication Questions:
5. **Password Policy**: What are the password requirements?
   - Minimum length?
   - Special characters required?
   - Number required?
6. **Login Identifier**: Can users login with both email AND phone?
7. **OTP**: What is the OTP expiry time?
8. **Social Login**: Which providers are supported? (Google, Apple, both?)

### Security Questions:
9. **Rate Limiting**: What rate limits are set on auth endpoints?
10. **Session Management**: Can users have multiple active sessions?
11. **Account Verification**: Do users need to verify email/phone before login?

---

## 🧪 Sample Test Requests

### Test 1: Registration
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "password": "Test123!"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "Test User",
      "email": "test@example.com",
      "phone": "9876543210"
    }
  }
}
```

### Test 2: Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "test@example.com",
    "password": "Test123!"
  }'
```

### Test 3: Protected Endpoint
```bash
curl -X GET http://localhost:8000/api/user/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

---

## ⚠️ Issues We Need Clarification On

### 1. Login Identifier Field
**Our Implementation**: We send `identifier` (can be email or phone)
```json
{
  "identifier": "john@example.com",  // or "9876543210"
  "password": "password123"
}
```

**Question**: Does your backend accept this? Or do you need separate fields?
- Option A: `identifier` (single field - what we're using)
- Option B: `email` and `phone` (separate fields)
- Option C: `emailOrPhone` (different field name)

### 2. Social Login Payload
**Our Implementation**:
```json
{
  "provider": "google",
  "idToken": "google_id_token",
  "email": "user@gmail.com",
  "name": "User Name",
  "avatar": "https://..."
}
```

**Question**: Is this the correct format? Do you need additional fields?

### 3. OTP Verification
**Our Implementation**:
```json
{
  "phone": "9876543210",
  "otp": "123456"
}
```

**Question**: 
- Should we send a session ID or reference ID?
- How do you track which OTP belongs to which verification attempt?

---

## 🚨 CORS Configuration Required

Please ensure these origins are whitelisted in your CORS configuration:

```javascript
// Development
'http://localhost:5173'
'http://localhost:5174'
'http://localhost:3000'

// Production
'https://yoraa.in'
'https://www.yoraa.in'
```

### Required CORS Headers:
```
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

---

## ✅ What We Need From You

### Immediate Action Items:
1. **Review Documentation**: Read `BACKEND_CONNECTION_VERIFICATION.md`
2. **Verify Endpoints**: Confirm all 8 auth endpoints exist and match our format
3. **Test Endpoints**: Run the provided curl commands
4. **Answer Questions**: Address the questions in this document
5. **CORS Setup**: Whitelist our frontend origins
6. **Share API Docs**: If you have Postman collections or OpenAPI specs

### Information We Need:
- [ ] Confirmation that endpoint URLs are correct
- [ ] Confirmation that request/response formats match
- [ ] JWT token expiry time
- [ ] Password policy requirements
- [ ] Rate limiting details
- [ ] Any additional headers or parameters needed
- [ ] Error response format examples
- [ ] Test credentials (for development/staging)

---

## 📞 Communication

### Preferred Response Format:
Please respond with:
1. ✅ **Confirmed** - Endpoint works as documented
2. ⚠️ **Needs Update** - Endpoint exists but format is different
3. ❌ **Not Implemented** - Endpoint doesn't exist yet
4. 📝 **Notes** - Additional information or requirements

### Example Response:
```
✅ POST /api/auth/register - Confirmed, works as documented
⚠️ POST /api/auth/login - Needs Update: 
   - Use "email" and "phone" as separate fields, not "identifier"
   - Password field name is "pwd" not "password"
❌ POST /api/auth/social-login - Not implemented yet
📝 Token expiry is 24 hours, not 7 days
```

---

## 🎯 Next Steps

### After Your Review:
1. **Frontend Team**: Update code based on your feedback
2. **Backend Team**: Fix any mismatches or implement missing endpoints
3. **Both Teams**: Coordinate on integration testing
4. **Both Teams**: Test end-to-end flows
5. **Both Teams**: Deploy to staging for final testing

---

## 📎 Quick Links

- **Main Documentation**: `BACKEND_CONNECTION_VERIFICATION.md`
- **Flow Diagrams**: `BACKEND_INTEGRATION_FLOW.md`
- **Frontend Code**: 
  - `src/services/api.js` - API configuration
  - `src/services/authService.js` - Auth functions
  - `src/services/apiEndpoints.js` - Endpoint definitions

---

## 🔧 Technical Stack

**Frontend**:
- Framework: React 18
- Build Tool: Vite
- HTTP Client: Axios
- State Management: Redux Toolkit (planned)
- Storage: localStorage

**Expected Backend**:
- Runtime: Node.js
- Framework: Express.js (assumed)
- Database: MongoDB
- Authentication: JWT
- Password Hashing: bcrypt

---

## ⏰ Timeline

We need your feedback by: **[Add deadline here]**

This is required for:
- [ ] Authentication feature completion
- [ ] User registration & login implementation
- [ ] Protected routes implementation
- [ ] Full e-commerce functionality

---

## 💬 Contact

**Frontend Team Lead**: [Your name]
**Email**: [Your email]
**Slack/Discord**: [Your handle]

**For Quick Questions**: [Your preferred communication channel]

---

## 📝 Change Log

| Date | Version | Changes |
|------|---------|---------|
| Oct 19, 2025 | 1.0 | Initial integration documentation |

---

**Status**: ⏳ Awaiting Backend Team Review  
**Priority**: 🔴 High Priority  
**Blocking**: Frontend authentication implementation

---

## 🙏 Thank You!

We appreciate your time in reviewing this integration documentation. Clear communication between our teams will ensure a smooth integration and better product for our users.

Looking forward to your feedback!

---

**Prepared by**: Frontend Development Team  
**Last Updated**: October 19, 2025  
**Version**: 1.0
