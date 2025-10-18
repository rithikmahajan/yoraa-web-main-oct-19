/**
 * 🧪 Authentication Endpoints Testing Suite
 * Test all authentication endpoints for Yoraa.in
 */

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
  resetPasswordWithToken,
  isAuthenticated
} from './authService';

/**
 * Test Data
 */
const TEST_USER = {
  name: 'Test User',
  email: 'test@yoraa.in',
  phone: '+919876543210',
  password: 'Test@123456'
};

const TEST_OTP = '123456';
const TEST_RESET_TOKEN = 'dummy-reset-token';

/**
 * 🔹 Test 1: Register New User
 */
export const testRegister = async () => {
  console.log('\n🔹 Testing: POST /api/auth/register');
  console.log('==========================================');
  
  try {
    const result = await registerWithEmail({
      name: TEST_USER.name,
      email: TEST_USER.email,
      phone: TEST_USER.phone,
      password: TEST_USER.password
    });
    
    console.log('✅ Registration Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user,
      hasFirebaseUser: !!result.firebaseUser
    });
    
    return result;
  } catch (error) {
    console.error('❌ Registration Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 2: Login with Email
 */
export const testLoginEmail = async () => {
  console.log('\n🔹 Testing: POST /api/auth/login (Email)');
  console.log('==========================================');
  
  try {
    const result = await loginWithEmail({
      email: TEST_USER.email,
      password: TEST_USER.password
    });
    
    console.log('✅ Email Login Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user,
      hasFirebaseUser: !!result.firebaseUser
    });
    
    return result;
  } catch (error) {
    console.error('❌ Email Login Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 3: Login with Phone
 */
export const testLoginPhone = async () => {
  console.log('\n🔹 Testing: POST /api/auth/login (Phone)');
  console.log('==========================================');
  
  try {
    const result = await loginWithPhone({
      phone: TEST_USER.phone,
      password: TEST_USER.password
    });
    
    console.log('✅ Phone Login Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user
    });
    
    return result;
  } catch (error) {
    console.error('❌ Phone Login Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 4: Social Login (Google)
 */
export const testGoogleLogin = async () => {
  console.log('\n🔹 Testing: POST /api/auth/social-login (Google)');
  console.log('==========================================');
  
  try {
    console.log('⚠️ This will open Google Sign-In popup...');
    const result = await signInWithGoogle();
    
    console.log('✅ Google Login Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user,
      hasFirebaseUser: !!result.firebaseUser
    });
    
    return result;
  } catch (error) {
    console.error('❌ Google Login Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 5: Social Login (Apple)
 */
export const testAppleLogin = async () => {
  console.log('\n🔹 Testing: POST /api/auth/social-login (Apple)');
  console.log('==========================================');
  
  try {
    console.log('⚠️ This will open Apple Sign-In popup...');
    const result = await signInWithApple();
    
    console.log('✅ Apple Login Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user,
      hasFirebaseUser: !!result.firebaseUser
    });
    
    return result;
  } catch (error) {
    console.error('❌ Apple Login Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 6: Verify OTP
 */
export const testVerifyOTP = async () => {
  console.log('\n🔹 Testing: POST /api/auth/verify-otp');
  console.log('==========================================');
  
  try {
    const result = await verifyOTP({
      phone: TEST_USER.phone,
      otp: TEST_OTP
    });
    
    console.log('✅ OTP Verification Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      user: result.user,
      data: result.data
    });
    
    return result;
  } catch (error) {
    console.error('❌ OTP Verification Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 7: Resend OTP
 */
export const testResendOTP = async () => {
  console.log('\n🔹 Testing: POST /api/auth/resend-otp');
  console.log('==========================================');
  
  try {
    const result = await resendOTP({
      phone: TEST_USER.phone
    });
    
    console.log('✅ OTP Resent Successfully!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      data: result.data
    });
    
    return result;
  } catch (error) {
    console.error('❌ Resend OTP Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 8: Forgot Password
 */
export const testForgotPassword = async () => {
  console.log('\n🔹 Testing: POST /api/auth/forgot-password');
  console.log('==========================================');
  
  try {
    const result = await forgotPassword({
      email: TEST_USER.email
    });
    
    console.log('✅ Password Reset Email Sent!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      data: result.data
    });
    
    return result;
  } catch (error) {
    console.error('❌ Forgot Password Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 9: Reset Password with Token
 */
export const testResetPassword = async () => {
  console.log('\n🔹 Testing: POST /api/auth/reset-password');
  console.log('==========================================');
  
  try {
    const result = await resetPasswordWithToken({
      token: TEST_RESET_TOKEN,
      password: 'NewPassword@123',
      confirmPassword: 'NewPassword@123'
    });
    
    console.log('✅ Password Reset Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message,
      data: result.data
    });
    
    return result;
  } catch (error) {
    console.error('❌ Password Reset Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🔹 Test 10: Logout
 */
export const testLogout = async () => {
  console.log('\n🔹 Testing: POST /api/auth/logout');
  console.log('==========================================');
  
  try {
    const result = await logout();
    
    console.log('✅ Logout Successful!');
    console.log('Response:', {
      success: result.success,
      message: result.message
    });
    
    // Verify user is logged out
    const isUserAuthenticated = isAuthenticated();
    console.log('Is User Authenticated:', isUserAuthenticated);
    
    return result;
  } catch (error) {
    console.error('❌ Logout Failed:', error.message);
    console.error('Error Details:', error);
    throw error;
  }
};

/**
 * 🧪 Run All Authentication Tests
 */
export const runAllAuthTests = async () => {
  console.log('\n🚀 Starting Authentication Endpoints Tests');
  console.log('===========================================\n');
  
  const results = {
    passed: 0,
    failed: 0,
    tests: []
  };

  // Test 1: Register
  try {
    await testRegister();
    results.passed++;
    results.tests.push({ name: 'Register', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Register', status: 'FAILED', error: error.message });
  }

  // Test 2: Login with Email
  try {
    await testLoginEmail();
    results.passed++;
    results.tests.push({ name: 'Login Email', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Login Email', status: 'FAILED', error: error.message });
  }

  // Test 3: Verify OTP
  try {
    await testVerifyOTP();
    results.passed++;
    results.tests.push({ name: 'Verify OTP', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Verify OTP', status: 'FAILED', error: error.message });
  }

  // Test 4: Resend OTP
  try {
    await testResendOTP();
    results.passed++;
    results.tests.push({ name: 'Resend OTP', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Resend OTP', status: 'FAILED', error: error.message });
  }

  // Test 5: Forgot Password
  try {
    await testForgotPassword();
    results.passed++;
    results.tests.push({ name: 'Forgot Password', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Forgot Password', status: 'FAILED', error: error.message });
  }

  // Test 6: Reset Password
  try {
    await testResetPassword();
    results.passed++;
    results.tests.push({ name: 'Reset Password', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Reset Password', status: 'FAILED', error: error.message });
  }

  // Test 7: Logout
  try {
    await testLogout();
    results.passed++;
    results.tests.push({ name: 'Logout', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Logout', status: 'FAILED', error: error.message });
  }

  // Test 8: Login with Phone (after logout)
  try {
    await testLoginPhone();
    results.passed++;
    results.tests.push({ name: 'Login Phone', status: 'PASSED' });
  } catch (error) {
    results.failed++;
    results.tests.push({ name: 'Login Phone', status: 'FAILED', error: error.message });
  }

  // Print Summary
  console.log('\n\n📊 Test Summary');
  console.log('===========================================');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📝 Total: ${results.tests.length}\n`);
  
  console.table(results.tests);
  
  return results;
};

/**
 * 🎯 Quick Test - Test Single Endpoint
 */
export const quickTest = async (testName) => {
  const tests = {
    register: testRegister,
    loginEmail: testLoginEmail,
    loginPhone: testLoginPhone,
    google: testGoogleLogin,
    apple: testAppleLogin,
    verifyOTP: testVerifyOTP,
    resendOTP: testResendOTP,
    forgotPassword: testForgotPassword,
    resetPassword: testResetPassword,
    logout: testLogout
  };

  if (tests[testName]) {
    return await tests[testName]();
  } else {
    console.error('❌ Invalid test name. Available tests:', Object.keys(tests));
  }
};

// Export individual tests for manual testing
export default {
  testRegister,
  testLoginEmail,
  testLoginPhone,
  testGoogleLogin,
  testAppleLogin,
  testVerifyOTP,
  testResendOTP,
  testForgotPassword,
  testResetPassword,
  testLogout,
  runAllAuthTests,
  quickTest
};
