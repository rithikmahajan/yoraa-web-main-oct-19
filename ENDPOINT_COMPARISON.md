# 🔄 Frontend vs Backend Endpoint Comparison

**Visual comparison of what we're calling vs what backend has**

---

## 1️⃣ Registration

### ❌ Current Frontend Code:
```javascript
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "Test123!"
}
```

### ✅ Backend Actual Endpoint:
```javascript
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "phNo": "9876543210",  // ⚠️ Different field name
  "password": "Test123!"
}
```

### 🔧 What Needs to Change:
- Endpoint: `/register` → `/signup`
- Field: `phone` → `phNo`

---

## 2️⃣ Login

### ❌ Current Frontend Code:
```javascript
POST /api/auth/login
{
  "identifier": "john@example.com",  // Can be email OR phone
  "password": "Test123!"
}
```

### ✅ Backend Actual Endpoint:
```javascript
POST /api/auth/login
{
  "email": "john@example.com",  // Separate fields
  // OR
  "phNo": "9876543210",
  "password": "Test123!"
}
```

### 🔧 What Needs to Change:
- Remove: `identifier` field
- Add: Logic to send either `email` OR `phNo` based on input

---

## 3️⃣ Social Login (Google/Apple)

### ❌ Current Frontend Code:
```javascript
POST /api/auth/social-login
{
  "provider": "google",
  "idToken": "google_token_here",
  "email": "john@example.com",
  "name": "John Doe",
  "avatar": "https://..."
}
```

### ✅ Backend Actual Endpoint:
```javascript
POST /api/auth/login/firebase
{
  "idToken": "google_token_here"
}
```

### 🔧 What Needs to Change:
- Endpoint: `/social-login` → `/login/firebase`
- Body: Send only `idToken`, remove provider/email/name/avatar

---

## 4️⃣ OTP Verification

### ❌ Current Frontend Code:
```javascript
POST /api/auth/verify-otp
{
  "phone": "9876543210",
  "otp": "123456"
}
```

### ✅ Backend Actual Endpoint:
```javascript
POST /api/auth/verifyOtp  // ⚠️ camelCase
{
  "phoneNumber": "9876543210",  // ⚠️ Different field name
  // OR "phNo": "9876543210",
  "otp": "123456"
}
```

### 🔧 What Needs to Change:
- Endpoint: `/verify-otp` → `/verifyOtp`
- Field: `phone` → `phoneNumber` or `phNo`

---

## 5️⃣ Resend OTP

### ❌ Current Frontend Code:
```javascript
POST /api/auth/resend-otp
{
  "phone": "9876543210"
}
```

### ✅ Backend Actual Endpoint:
```javascript
POST /api/auth/generate-otp
{
  "phoneNumber": "9876543210"
}
```

### 🔧 What Needs to Change:
- Endpoint: `/resend-otp` → `/generate-otp`
- Field: `phone` → `phoneNumber`

---

## 6️⃣ Forgot Password

### ❌ Current Frontend Code:
```javascript
POST /api/auth/forgot-password
{
  "email": "john@example.com"
}
```

### ❌ Backend Status:
**Does NOT exist** - No email-based password reset

### Alternative Backend Has:
```javascript
POST /api/auth/resetPassword
{
  "phNo": "9876543210",
  "newPassword": "NewPass123!"
}
```

### 🔧 What Needs to Change:
- **Option 1**: Remove forgot-password feature from frontend
- **Option 2**: Ask backend to implement email-based reset
- **Option 3**: Change frontend to phone-based reset only

---

## 7️⃣ Reset Password

### ❌ Current Frontend Code:
```javascript
POST /api/auth/reset-password
{
  "token": "reset_token_from_email",
  "newPassword": "NewPass123!",
  "confirmPassword": "NewPass123!"
}
```

### ❌ Backend Status:
**Token-based reset does NOT exist**

### Alternative Backend Has:
```javascript
POST /api/auth/resetPassword
{
  "phNo": "9876543210",
  "newPassword": "NewPass123!"
}
```

### 🔧 What Needs to Change:
- Use phone-based reset instead of token-based
- Remove email/token flow from frontend

---

## ✅ What's Already Matching

### 8️⃣ Logout
```javascript
POST /api/auth/logout
Headers: { Authorization: "Bearer token" }
```
**Status**: ✅ Perfect match

### 9️⃣ Token Refresh
```javascript
POST /api/auth/refresh-token
Headers: { Authorization: "Bearer token" }
```
**Status**: ✅ Perfect match

---

## 📊 Summary Table

| Endpoint | Frontend | Backend | Status | Fix Type |
|----------|----------|---------|--------|----------|
| Register | `/register` | `/signup` | ❌ | Change endpoint + field |
| Login | `/login` (identifier) | `/login` (email/phNo) | ⚠️ | Change request format |
| Social Login | `/social-login` | `/login/firebase` | ❌ | Change endpoint + format |
| Verify OTP | `/verify-otp` | `/verifyOtp` | ❌ | Change endpoint + field |
| Resend OTP | `/resend-otp` | `/generate-otp` | ❌ | Change endpoint + field |
| Forgot Password | `/forgot-password` | ❌ Missing | 🔴 | Remove or wait for backend |
| Reset Password | `/reset-password` | `/resetPassword` | ⚠️ | Change to phone-based |
| Logout | `/logout` | `/logout` | ✅ | None |
| Refresh Token | `/refresh-token` | `/refresh-token` | ✅ | None |

---

## 🎯 Quick Fix Code Changes Needed

### File: `src/services/authService.js`

```javascript
// BEFORE (Current - Won't Work):
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', {
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password
  });
  // ...
};

// AFTER (Fixed - Will Work):
export const registerUser = async (userData) => {
  const response = await api.post('/auth/signup', {  // Changed endpoint
    name: userData.name,
    email: userData.email,
    phNo: userData.phone,  // Changed field name
    password: userData.password
  });
  // ...
};
```

---

## 🚦 Priority Fixes

### 🔴 Must Fix Now (Blocking):
1. Registration endpoint + field name
2. Login request format
3. Social login endpoint + format
4. OTP endpoints + field names

### 🟡 Can Work Around:
5. Password reset (remove feature temporarily or use phone-based)

### ✅ Already Working:
6. Logout
7. Token refresh

---

## 💬 Questions for Backend Team

1. **Can you add aliases for REST standard endpoints?**
   - `/register` alias for `/signup`
   - `/verify-otp` alias for `/verifyOtp`
   - `/social-login` wrapper for `/login/firebase`

2. **Can we standardize phone field names?**
   - Current mix: `phNo`, `phoneNumber`, `phone`
   - Prefer: One consistent name across all endpoints

3. **Will you implement email-based password reset?**
   - Need `/forgot-password` (sends email)
   - Need `/reset-password` (with token)
   - Or should frontend use phone-based only?

4. **Can login accept `identifier` field?**
   - Auto-detect if email or phone
   - Simplifies frontend logic

---

## 📱 Share This With Backend Team

Send them:
1. ✅ `CONNECTION_STATUS_ANALYSIS.md` (high-level issues)
2. ✅ `ENDPOINT_COMPARISON.md` (this file - detailed comparison)
3. ✅ `BACKEND_CONNECTION_VERIFICATION.md` (what we expect)

Then ask: **"Option A or B?"**
- **Option A**: Frontend adapts to backend (quick fix)
- **Option B**: Backend adds aliases (proper solution)

---

**Ready to implement Option A?** Let me know! 🚀
