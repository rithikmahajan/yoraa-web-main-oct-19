# Firebase Phone Authentication Setup Guide

## 🚨 Important: Enable Phone Authentication

To use phone number login with OTP, you **MUST** enable Phone Authentication in your Firebase Console.

## Steps to Enable:

### 1. Go to Firebase Console
Visit: https://console.firebase.google.com/

### 2. Select Your Project
Click on **"yoraa-android-ios"**

### 3. Navigate to Authentication
- Click **"Authentication"** in the left sidebar
- Or go directly to: https://console.firebase.google.com/project/yoraa-android-ios/authentication

### 4. Enable Phone Sign-In Method
1. Click on the **"Sign-in method"** tab
2. Find **"Phone"** in the list of providers
3. Click on **"Phone"**
4. Toggle the **"Enable"** switch to ON
5. Click **"Save"**

### 5. (Optional) Add Test Phone Numbers
For development/testing without sending real SMS:
1. In the Phone provider settings, scroll to **"Phone numbers for testing"**
2. Add test numbers with their verification codes (e.g., +911234567890 → 123456)
3. Click **"Save"**

## ⚠️ Common Errors:

### Error: "400 Bad Request" on sendVerificationCode
**Cause**: Phone authentication is not enabled  
**Solution**: Follow steps above to enable Phone authentication

### Error: "auth/operation-not-allowed"
**Cause**: Phone sign-in method is disabled  
**Solution**: Enable Phone in Firebase Console

### Error: "auth/quota-exceeded"
**Cause**: Daily SMS quota exceeded  
**Solution**: 
- Use test phone numbers for development
- Upgrade Firebase plan for higher quota
- Wait 24 hours for quota reset

### Error: "auth/invalid-phone-number"
**Cause**: Phone number format is incorrect  
**Solution**: Ensure format is +[country_code][number] (e.g., +911234567890)

## 📱 Testing Without Real SMS

For development, use Firebase's test phone numbers:

1. Go to: Authentication → Sign-in method → Phone
2. Scroll to "Phone numbers for testing"
3. Add entries like:
   - Phone: `+911234567890`
   - Code: `123456`

Now you can login with +911234567890 and use 123456 as OTP without sending real SMS!

## 🔐 Security Considerations

### reCAPTCHA
- **Development**: Uses invisible reCAPTCHA (automated)
- **Production**: May show reCAPTCHA challenge to prevent abuse

### Rate Limiting
Firebase automatically rate limits:
- SMS sends per phone number
- SMS sends per IP address
- Total daily SMS quota

## 📊 Current Implementation

The app uses:
- **Country**: India (+91)
- **OTP Length**: 6 digits
- **Resend Timer**: 60 seconds
- **Auto-focus**: Moves to next digit automatically
- **Backspace**: Moves to previous digit

## 🔗 Useful Links

- [Firebase Phone Auth Docs](https://firebase.google.com/docs/auth/web/phone-auth)
- [Firebase Console](https://console.firebase.google.com/project/yoraa-android-ios/authentication)
- [reCAPTCHA Settings](https://console.cloud.google.com/security/recaptcha)

## ✅ Verification Checklist

Before testing phone authentication:
- [ ] Phone authentication enabled in Firebase Console
- [ ] Test phone numbers added (for development)
- [ ] Firebase config updated in `.env.local`
- [ ] Dev server restarted after config changes
- [ ] Browser console cleared (hard refresh: Cmd+Shift+R)

## 💡 Pro Tips

1. **Use Test Numbers**: Don't waste SMS quota during development
2. **Check Quotas**: Monitor usage in Firebase Console → Authentication → Usage
3. **Error Handling**: App shows user-friendly error messages
4. **Debugging**: Check browser console for detailed error codes

---

Need help? Check the Firebase Auth documentation or contact your Firebase administrator.
