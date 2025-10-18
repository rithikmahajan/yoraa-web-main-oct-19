# Google Sign-In Fix - redirect_uri_mismatch Error

## 🚨 Current Error

```
Access blocked: yoraa's request is invalid
Error 400: redirect_uri_mismatch
```

This error occurs because your current domain (`localhost:5173`) is not authorized in Google Cloud Console.

## 🔧 Quick Fix Steps

### Step 1: Go to Google Cloud Console

1. Visit: https://console.cloud.google.com/
2. Select your project: **yoraa-android-ios**
3. Go to **APIs & Services** → **Credentials**

### Step 2: Find Your OAuth 2.0 Client ID

1. Look for **"Web client (auto created by Google Service)"** or similar
2. Click on it to edit

### Step 3: Add Authorized Redirect URIs

Add these URIs to the **"Authorized redirect URIs"** section:

```
http://localhost:5173/__/auth/handler
http://localhost:5174/__/auth/handler
http://127.0.0.1:5173/__/auth/handler
http://127.0.0.1:5174/__/auth/handler
https://yoraa-android-ios.firebaseapp.com/__/auth/handler
```

### Step 4: Add Authorized JavaScript Origins

Add these to **"Authorized JavaScript origins"**:

```
http://localhost:5173
http://localhost:5174
http://127.0.0.1:5173
http://127.0.0.1:5174
```

### Step 5: Save Changes

1. Click **"Save"** button
2. Wait 1-2 minutes for changes to propagate
3. Clear browser cache or use incognito mode
4. Try Google Sign-In again

## 📸 Visual Guide

### What You Should See:

```
OAuth 2.0 Client IDs
├── Web client (auto created by Google Service)
    ├── Authorized JavaScript origins
    │   ├── http://localhost:5173
    │   ├── http://localhost:5174
    │   └── http://127.0.0.1:5173
    │
    └── Authorized redirect URIs
        ├── http://localhost:5173/__/auth/handler
        ├── http://localhost:5174/__/auth/handler
        └── https://yoraa-android-ios.firebaseapp.com/__/auth/handler
```

## 🎯 Alternative: Use Firebase Auth Domain

The redirect URI that Google is expecting is:
```
https://yoraa-android-ios.firebaseapp.com/__/auth/handler
```

This should already be configured by Firebase. If you're still getting errors, make sure:

1. **Check your Firebase Auth Domain**: 
   - Should be: `yoraa-android-ios.firebaseapp.com`
   - Verify in `.env.local`: `VITE_FIREBASE_AUTH_DOMAIN`

2. **Authorized domains in Firebase Console**:
   - Go to: Firebase Console → Authentication → Settings → Authorized domains
   - Make sure these are listed:
     - `localhost`
     - `yoraa-android-ios.firebaseapp.com`
     - Your production domain (when ready)

## 🔍 Current Configuration Check

Your current `.env.local` should have:
```bash
VITE_FIREBASE_AUTH_DOMAIN=yoraa-android-ios.firebaseapp.com
```

## 🐛 Troubleshooting

### If error persists after adding URIs:

1. **Clear browser cache**:
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Or use Incognito/Private window

2. **Wait 2-3 minutes**:
   - Google Cloud Console changes can take time to propagate

3. **Check for typos**:
   - Make sure URIs are exactly: `http://localhost:5173/__/auth/handler`
   - Note the double underscore: `__`
   - Must start with `http://` for localhost

4. **Verify port number**:
   - Your dev server is running on: `localhost:5173` or `localhost:5174`
   - Make sure you added the correct port

### If you see "This app is blocked":

This means Google needs to verify your app. For development:

1. Go to OAuth consent screen
2. Add your email as a test user
3. Or set app to "Internal" (if using Google Workspace)

## 📱 For Production Later

When deploying to production, add these URIs:

```
https://yourdomain.com/__/auth/handler
https://www.yourdomain.com/__/auth/handler
```

And these origins:
```
https://yourdomain.com
https://www.yourdomain.com
```

## ✅ Verification Steps

After fixing:

1. Go to http://localhost:5173/login (or 5174)
2. Click "Sign In with Google"
3. Google popup should open without errors
4. Select your Google account
5. Grant permissions
6. Should redirect back to your app successfully

## 🔗 Quick Links

- Google Cloud Console Credentials: https://console.cloud.google.com/apis/credentials
- Firebase Console Authorized Domains: https://console.firebase.google.com/project/yoraa-android-ios/authentication/settings
- Firebase Auth Documentation: https://firebase.google.com/docs/auth/web/google-signin

---

**Time to fix**: 3-5 minutes
**Difficulty**: Easy 🟢
