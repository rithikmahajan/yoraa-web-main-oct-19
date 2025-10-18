# Deploying Yoraa.in to Netlify 🚀

This guide will walk you through deploying your Yoraa web app to Netlify with your custom domain `yoraa.in`.

## Prerequisites ✅

- [ ] GitHub repository with your code
- [ ] Netlify account (free tier is fine)
- [ ] Access to your domain registrar (for DNS configuration)
- [ ] All environment variables ready

## Step 1: Prepare Your Repository 📦

1. **Commit all your changes**:
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

2. **Verify build works locally**:
```bash
npm run build
npm run preview
```

## Step 2: Deploy to Netlify 🌐

### Option A: Deploy via Netlify UI (Recommended)

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign in** with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** as your Git provider
5. Select your repository: `rithikmahajan72/main-web-static-yoraa`
6. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Initialize and deploy**:
```bash
netlify init
netlify deploy --prod
```

## Step 3: Configure Environment Variables 🔐

In Netlify Dashboard:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add these variables (copy from your `.env.local`):

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

4. Click **"Save"**
5. **Trigger a new deploy** for changes to take effect

## Step 4: Configure Custom Domain (yoraa.in) 🌍

### 4.1 Add Domain in Netlify

1. In Netlify Dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter: `yoraa.in`
4. Click **"Add domain"**
5. Also add: `www.yoraa.in`

### 4.2 Configure DNS Records

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records:

**For apex domain (yoraa.in):**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: Automatic
```

**Alternative (if A record doesn't work):**
```
Type: ALIAS or ANAME
Name: @
Value: [your-netlify-site].netlify.app
TTL: Automatic
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [your-netlify-site].netlify.app
TTL: Automatic
```

**Note**: Replace `[your-netlify-site]` with your actual Netlify site name (e.g., `yoraa-web-123456.netlify.app`)

### 4.3 Enable HTTPS

1. In Netlify Dashboard → **Domain settings**
2. Wait for DNS to propagate (can take 24-48 hours, usually much faster)
3. Click **"Verify DNS configuration"**
4. Once verified, click **"Provision SSL certificate"**
5. Enable **"Force HTTPS"**

## Step 5: Update Google OAuth & Firebase 🔐

### 5.1 Update Google Cloud Console

Add these to your OAuth Client (`133733122921-cr74...`):

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

### 5.2 Update Firebase Console

1. Go to: https://console.firebase.google.com/project/yoraa-android-ios/authentication/settings
2. Under **"Authorized domains"**, add:
   - `yoraa.in`
   - `www.yoraa.in`

## Step 6: Test Your Deployment ✅

1. **Visit your site**: https://yoraa.in
2. **Test Google Sign-In**:
   - Go to login page
   - Click "Sign in with Google"
   - Should work without redirect errors
3. **Test API connectivity**:
   - Browse products
   - Add items to cart
4. **Check mobile responsiveness**
5. **Verify all routes work** (thanks to the SPA redirect rule)

## Troubleshooting 🔧

### Build Fails

```bash
# Test build locally first
npm run build

# Check for errors in build logs on Netlify
```

### DNS Not Propagating

```bash
# Check DNS propagation
dig yoraa.in
# or use: https://dnschecker.org/
```

### Environment Variables Not Working

- Make sure variable names start with `VITE_`
- Redeploy after adding variables
- Check build logs for any missing variables

### Google Sign-In Fails

- Verify OAuth URIs are added for `yoraa.in`
- Check Firebase authorized domains
- Clear browser cache and try again
- Wait 5-10 minutes for Google changes to propagate

### API Errors

- Verify `VITE_API_URL` is set correctly in Netlify
- Check CORS settings on your backend
- Ensure API server is accessible from production

## Post-Deployment Checklist ✨

- [ ] Site loads at `https://yoraa.in`
- [ ] www redirects to non-www (or vice versa)
- [ ] SSL certificate is active (padlock icon)
- [ ] Google Sign-In works
- [ ] All pages/routes load correctly
- [ ] API calls work
- [ ] Images load properly
- [ ] Mobile version looks good
- [ ] Performance is acceptable (check Lighthouse score)

## Continuous Deployment 🔄

Now, whenever you push to the `main` branch:

1. Netlify automatically detects the change
2. Runs `npm run build`
3. Deploys the new version
4. Your site updates in ~1-2 minutes

## Useful Commands

```bash
# Deploy to production
netlify deploy --prod

# Open Netlify dashboard
netlify open

# View deploy logs
netlify watch

# Run build locally
npm run build

# Preview production build
npm run preview
```

## Performance Tips 🚀

1. **Enable Netlify's CDN features**:
   - Asset optimization
   - Image optimization (Pro plan)
   - Prerendering for better SEO

2. **Add a robots.txt**:
```txt
User-agent: *
Allow: /
Sitemap: https://yoraa.in/sitemap.xml
```

3. **Consider adding a sitemap.xml** for SEO

## Monitoring

- **Netlify Analytics**: Track visitors and performance
- **Google Analytics**: Add your GA4 tracking
- **Sentry**: For error tracking (optional)

## Support Links 🔗

- Netlify Documentation: https://docs.netlify.com/
- Netlify Status: https://www.netlifystatus.com/
- Community Forums: https://answers.netlify.com/

---

**Estimated Time**: 20-30 minutes (excluding DNS propagation)

**Cost**: Free (Netlify Starter plan includes 100GB bandwidth/month)

Good luck with your deployment! 🎉
