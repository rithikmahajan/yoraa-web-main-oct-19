# 🚀 Quick Deploy Guide - Yoraa.in on Netlify

## Current Status ✅
- ✅ Build tested successfully (`npm run build` works)
- ✅ `netlify.toml` configuration created
- ✅ Deployment guide created (`NETLIFY_DEPLOYMENT.md`)
- ⏳ Ready to deploy to Netlify

## Quick Start (5 Minutes) ⚡

### 1. Push to GitHub
```bash
# You need to authenticate first
git push origin main
```

### 2. Connect to Netlify
1. Go to: https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** → Choose repo: `rithikmahajan72/main-web-static-yoraa`
4. Use these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch**: `main`
5. Click **"Deploy"**

### 3. Add Environment Variables
In Netlify Dashboard → Site settings → Environment variables:

```
VITE_API_URL=https://api.yoraa.in.net/api
VITE_ENV=production
VITE_FIREBASE_API_KEY=AIzaSyDrzngj26Irpf7vLI8MaA_70VVaT56XmS8
VITE_FIREBASE_AUTH_DOMAIN=yoraa-android-ios.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=yoraa-android-ios
VITE_FIREBASE_STORAGE_BUCKET=yoraa-android-ios.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=133733122921
VITE_FIREBASE_APP_ID=1:133733122921:web:2d177abff9fb94ef35b3f8
VITE_FIREBASE_MEASUREMENT_ID=G-HXS9N6W9D4
VITE_APP_NAME=Yoraa.in
VITE_APP_VERSION=1.0.0
```

### 4. Configure Domain (yoraa.in)
In Netlify → Domain settings:
1. Add domain: `yoraa.in`
2. Add domain: `www.yoraa.in`
3. **Configure DNS at your registrar**:

```
Type: A Record
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

### 5. Update Google OAuth
Add to Google Cloud Console OAuth client:

**Authorized JavaScript origins:**
```
https://yoraa.in
https://www.yoraa.in
```

**Authorized redirect URIs:**
```
https://yoraa.in/__/auth/handler
https://www.yoraa.in/__/auth/handler
```

### 6. Update Firebase
Add to Firebase Console → Authentication → Authorized domains:
- `yoraa.in`
- `www.yoraa.in`

## That's It! 🎉

Visit https://yoraa.in after DNS propagates (5-30 minutes)

---

For detailed instructions, see: `NETLIFY_DEPLOYMENT.md`
