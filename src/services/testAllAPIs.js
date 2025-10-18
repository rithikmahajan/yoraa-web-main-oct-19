/**
 * Complete Backend API Integration Test
 * Test all authentication and API endpoints
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
} from './services/authService';

import {
  authAPI,
  userAPI,
  productAPI,
  cartAPI,
  wishlistAPI,
  orderAPI,
  paymentAPI,
  addressAPI,
  categoryAPI,
  reviewAPI,
  promoAPI,
  notificationAPI,
  chatAPI,
  pointsAPI,
  inviteAPI,
  inboxAPI,
  bannerAPI,
  faqAPI,
  configAPI
} from './services/apiEndpoints';

/**
 * Test Suite Configuration
 */
const TEST_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  testUser: {
    name: 'Test User',
    email: 'test@yoraa.in',
    phone: '+919999999999',
    password: 'Test@123456'
  }
};

console.log('🧪 Testing Backend Connection to:', TEST_CONFIG.baseURL);

/**
 * 1. Test Backend Connection
 */
export const testBackendConnection = async () => {
  console.log('\n🔌 Testing Backend Connection...');
  
  try {
    const response = await configAPI.getRazorpayKey();
    console.log('✅ Backend connected successfully!');
    console.log('📊 Response:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed:', error.message);
    console.error('🔍 Details:', error.response?.data || error);
    return false;
  }
};

/**
 * 2. Test Authentication Endpoints
 */
export const testAuthenticationEndpoints = async () => {
  console.log('\n🔐 Testing Authentication Endpoints...');
  
  const results = {
    register: false,
    login: false,
    verifyOTP: false,
    resendOTP: false,
    forgotPassword: false,
    logout: false
  };

  // Test Registration
  try {
    console.log('\n📝 Testing Registration...');
    const registerResult = await registerWithEmail({
      name: TEST_CONFIG.testUser.name,
      email: `test_${Date.now()}@yoraa.in`, // Unique email
      phone: `+91${Math.floor(9000000000 + Math.random() * 1000000000)}`, // Unique phone
      password: TEST_CONFIG.testUser.password
    });
    console.log('✅ Registration successful!', registerResult);
    results.register = true;
  } catch (error) {
    console.error('❌ Registration failed:', error.message);
  }

  // Test Login with Email
  try {
    console.log('\n🔑 Testing Email Login...');
    const loginResult = await loginWithEmail({
      email: TEST_CONFIG.testUser.email,
      password: TEST_CONFIG.testUser.password
    });
    console.log('✅ Email login successful!', loginResult);
    results.login = true;
  } catch (error) {
    console.error('❌ Email login failed:', error.message);
  }

  // Test Resend OTP
  try {
    console.log('\n📱 Testing Resend OTP...');
    const otpResult = await resendOTP({
      phone: TEST_CONFIG.testUser.phone
    });
    console.log('✅ Resend OTP successful!', otpResult);
    results.resendOTP = true;
  } catch (error) {
    console.error('❌ Resend OTP failed:', error.message);
  }

  // Test Forgot Password
  try {
    console.log('\n🔒 Testing Forgot Password...');
    const forgotResult = await forgotPassword({
      email: TEST_CONFIG.testUser.email
    });
    console.log('✅ Forgot password successful!', forgotResult);
    results.forgotPassword = true;
  } catch (error) {
    console.error('❌ Forgot password failed:', error.message);
  }

  // Test Logout
  try {
    console.log('\n🚪 Testing Logout...');
    const logoutResult = await logout();
    console.log('✅ Logout successful!', logoutResult);
    results.logout = true;
  } catch (error) {
    console.error('❌ Logout failed:', error.message);
  }

  return results;
};

/**
 * 3. Test Product APIs
 */
export const testProductAPIs = async () => {
  console.log('\n🛍️ Testing Product APIs...');
  
  const results = {
    getAll: false,
    getById: false,
    search: false,
    getByCategory: false
  };

  // Test Get All Products
  try {
    console.log('\n📦 Testing Get All Products...');
    const products = await productAPI.getAll({ page: 1, limit: 10 });
    console.log('✅ Get products successful!', products.data);
    results.getAll = true;

    // Test Get Product by ID (if products exist)
    if (products.data?.data?.length > 0) {
      const productId = products.data.data[0]._id;
      console.log('\n🔍 Testing Get Product by ID...');
      const product = await productAPI.getById(productId);
      console.log('✅ Get product by ID successful!', product.data);
      results.getById = true;
    }
  } catch (error) {
    console.error('❌ Product API failed:', error.message);
  }

  // Test Search Products
  try {
    console.log('\n🔎 Testing Search Products...');
    const searchResults = await productAPI.search('shoe');
    console.log('✅ Search products successful!', searchResults.data);
    results.search = true;
  } catch (error) {
    console.error('❌ Search products failed:', error.message);
  }

  return results;
};

/**
 * 4. Test Cart APIs
 */
export const testCartAPIs = async () => {
  console.log('\n🛒 Testing Cart APIs...');
  
  const results = {
    get: false,
    add: false,
    update: false,
    remove: false
  };

  // Test Get Cart
  try {
    console.log('\n📋 Testing Get Cart...');
    const cart = await cartAPI.get();
    console.log('✅ Get cart successful!', cart.data);
    results.get = true;
  } catch (error) {
    console.error('❌ Get cart failed:', error.message);
  }

  return results;
};

/**
 * 5. Test User Profile APIs
 */
export const testUserAPIs = async () => {
  console.log('\n👤 Testing User Profile APIs...');
  
  const results = {
    getProfile: false,
    updateProfile: false
  };

  // Test Get Profile
  try {
    console.log('\n📇 Testing Get Profile...');
    const profile = await userAPI.getProfile();
    console.log('✅ Get profile successful!', profile.data);
    results.getProfile = true;
  } catch (error) {
    console.error('❌ Get profile failed:', error.message);
  }

  return results;
};

/**
 * 6. Test Category APIs
 */
export const testCategoryAPIs = async () => {
  console.log('\n📂 Testing Category APIs...');
  
  const results = {
    getAll: false,
    getSubcategories: false
  };

  // Test Get All Categories
  try {
    console.log('\n📁 Testing Get All Categories...');
    const categories = await categoryAPI.getAll();
    console.log('✅ Get categories successful!', categories.data);
    results.getAll = true;
  } catch (error) {
    console.error('❌ Get categories failed:', error.message);
  }

  // Test Get Subcategories
  try {
    console.log('\n📂 Testing Get Subcategories...');
    const subcategories = await categoryAPI.getSubcategories();
    console.log('✅ Get subcategories successful!', subcategories.data);
    results.getSubcategories = true;
  } catch (error) {
    console.error('❌ Get subcategories failed:', error.message);
  }

  return results;
};

/**
 * 7. Test Payment APIs
 */
export const testPaymentAPIs = async () => {
  console.log('\n💳 Testing Payment APIs...');
  
  const results = {
    getKey: false
  };

  // Test Get Razorpay Key
  try {
    console.log('\n🔑 Testing Get Razorpay Key...');
    const keyResponse = await paymentAPI.getKey();
    console.log('✅ Get Razorpay key successful!', keyResponse.data);
    results.getKey = true;
  } catch (error) {
    console.error('❌ Get Razorpay key failed:', error.message);
  }

  return results;
};

/**
 * 8. Test Wishlist APIs
 */
export const testWishlistAPIs = async () => {
  console.log('\n❤️ Testing Wishlist APIs...');
  
  const results = {
    get: false
  };

  // Test Get Wishlist
  try {
    console.log('\n📋 Testing Get Wishlist...');
    const wishlist = await wishlistAPI.get();
    console.log('✅ Get wishlist successful!', wishlist.data);
    results.get = true;
  } catch (error) {
    console.error('❌ Get wishlist failed:', error.message);
  }

  return results;
};

/**
 * 9. Test Order APIs
 */
export const testOrderAPIs = async () => {
  console.log('\n📦 Testing Order APIs...');
  
  const results = {
    getAll: false
  };

  // Test Get Orders
  try {
    console.log('\n📋 Testing Get Orders...');
    const orders = await orderAPI.getAll();
    console.log('✅ Get orders successful!', orders.data);
    results.getAll = true;
  } catch (error) {
    console.error('❌ Get orders failed:', error.message);
  }

  return results;
};

/**
 * 10. Test Banner APIs
 */
export const testBannerAPIs = async () => {
  console.log('\n🎨 Testing Banner APIs...');
  
  const results = {
    getAll: false,
    getHome: false
  };

  // Test Get All Banners
  try {
    console.log('\n🖼️ Testing Get All Banners...');
    const banners = await bannerAPI.getAll();
    console.log('✅ Get banners successful!', banners.data);
    results.getAll = true;
  } catch (error) {
    console.error('❌ Get banners failed:', error.message);
  }

  // Test Get Home Banners
  try {
    console.log('\n🏠 Testing Get Home Banners...');
    const homeBanners = await bannerAPI.getHome();
    console.log('✅ Get home banners successful!', homeBanners.data);
    results.getHome = true;
  } catch (error) {
    console.error('❌ Get home banners failed:', error.message);
  }

  return results;
};

/**
 * 11. Test FAQ APIs
 */
export const testFAQAPIs = async () => {
  console.log('\n❓ Testing FAQ APIs...');
  
  const results = {
    getAll: false
  };

  // Test Get All FAQs
  try {
    console.log('\n📚 Testing Get All FAQs...');
    const faqs = await faqAPI.getAll();
    console.log('✅ Get FAQs successful!', faqs.data);
    results.getAll = true;
  } catch (error) {
    console.error('❌ Get FAQs failed:', error.message);
  }

  return results;
};

/**
 * Run All Tests
 */
export const runAllTests = async () => {
  console.log('\n🚀 Starting Complete Backend API Tests...\n');
  console.log('=' . repeat(60));
  
  const testResults = {
    connection: false,
    auth: {},
    products: {},
    cart: {},
    user: {},
    categories: {},
    payment: {},
    wishlist: {},
    orders: {},
    banners: {},
    faqs: {}
  };

  // 1. Test Connection
  testResults.connection = await testBackendConnection();
  
  if (!testResults.connection) {
    console.error('\n❌ Backend connection failed. Please ensure backend is running.');
    console.log('\n📝 To start backend:');
    console.log('   cd oct-7-backend-admin-main');
    console.log('   npm install');
    console.log('   npm start');
    return testResults;
  }

  // 2. Test Authentication (no auth required)
  testResults.auth = await testAuthenticationEndpoints();

  // 3. Test Public APIs (no auth required)
  testResults.products = await testProductAPIs();
  testResults.categories = await testCategoryAPIs();
  testResults.payment = await testPaymentAPIs();
  testResults.banners = await testBannerAPIs();
  testResults.faqs = await testFAQAPIs();

  // 4. Test Protected APIs (require auth)
  if (isAuthenticated()) {
    testResults.cart = await testCartAPIs();
    testResults.user = await testUserAPIs();
    testResults.wishlist = await testWishlistAPIs();
    testResults.orders = await testOrderAPIs();
  } else {
    console.log('\n⚠️ Skipping protected API tests (user not authenticated)');
  }

  // Print Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Test Results Summary:\n');
  console.log('✅ Backend Connection:', testResults.connection ? 'PASSED' : 'FAILED');
  console.log('✅ Authentication APIs:', Object.values(testResults.auth).filter(Boolean).length, '/', Object.keys(testResults.auth).length, 'passed');
  console.log('✅ Product APIs:', Object.values(testResults.products).filter(Boolean).length, '/', Object.keys(testResults.products).length, 'passed');
  console.log('✅ Category APIs:', Object.values(testResults.categories).filter(Boolean).length, '/', Object.keys(testResults.categories).length, 'passed');
  console.log('✅ Payment APIs:', Object.values(testResults.payment).filter(Boolean).length, '/', Object.keys(testResults.payment).length, 'passed');
  console.log('✅ Banner APIs:', Object.values(testResults.banners).filter(Boolean).length, '/', Object.keys(testResults.banners).length, 'passed');
  console.log('✅ FAQ APIs:', Object.values(testResults.faqs).filter(Boolean).length, '/', Object.keys(testResults.faqs).length, 'passed');
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Testing complete!\n');

  return testResults;
};

/**
 * Quick Test - Just Connection
 */
export const quickTest = async () => {
  console.log('\n⚡ Running Quick Connection Test...\n');
  
  const connected = await testBackendConnection();
  
  if (connected) {
    console.log('\n✅ Backend is ready! You can now use the API.');
  } else {
    console.log('\n❌ Backend connection failed.');
    console.log('\n📝 Troubleshooting:');
    console.log('   1. Check if backend server is running on:', TEST_CONFIG.baseURL);
    console.log('   2. Verify environment variables in .env.development');
    console.log('   3. Check CORS settings on backend');
  }
  
  return connected;
};

// Export for use in browser console or components
if (typeof window !== 'undefined') {
  window.testBackendAPI = {
    quickTest,
    runAllTests,
    testBackendConnection,
    testAuthenticationEndpoints,
    testProductAPIs,
    testCartAPIs,
    testUserAPIs,
    testCategoryAPIs,
    testPaymentAPIs,
    testWishlistAPIs,
    testOrderAPIs,
    testBannerAPIs,
    testFAQAPIs
  };
  
  console.log('\n💡 Backend API tests available in window.testBackendAPI');
  console.log('   Try: window.testBackendAPI.quickTest()');
  console.log('   Or:  window.testBackendAPI.runAllTests()');
}

export default {
  quickTest,
  runAllTests,
  testBackendConnection,
  testAuthenticationEndpoints,
  testProductAPIs,
  testCartAPIs,
  testUserAPIs,
  testCategoryAPIs,
  testPaymentAPIs,
  testWishlistAPIs,
  testOrderAPIs,
  testBannerAPIs,
  testFAQAPIs
};
