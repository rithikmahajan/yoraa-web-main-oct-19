/**
 * Test backend connection and API endpoints
 */
import api, { handleApiError } from './api';
import { configAPI } from './apiEndpoints';

/**
 * Test if backend is reachable
 * @returns {Promise<boolean>} Connection status
 */
export const testConnection = async () => {
  try {
    console.log('🔍 Testing backend connection...');
    const response = await configAPI.getRazorpayKey();
    console.log('✅ Backend connected successfully!');
    console.log('Response:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed:');
    console.error('Error:', handleApiError(error));
    return false;
  }
};

/**
 * Test authentication endpoints
 */
export const testAuthEndpoints = async () => {
  console.log('🔍 Testing authentication endpoints...');
  
  try {
    // Test registration (with dummy data - will fail but validates endpoint)
    console.log('Testing /auth/register...');
    await api.post('/auth/register', {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      password: 'test123'
    });
  } catch (error) {
    console.log('Register endpoint:', error.response?.status || 'Network Error');
  }

  try {
    // Test login
    console.log('Testing /auth/login...');
    await api.post('/auth/login', {
      phone: '1234567890',
      password: 'test123'
    });
  } catch (error) {
    console.log('Login endpoint:', error.response?.status || 'Network Error');
  }

  console.log('✅ Authentication endpoints test complete');
};

/**
 * Test product endpoints
 */
export const testProductEndpoints = async () => {
  console.log('🔍 Testing product endpoints...');
  
  try {
    console.log('Testing /items...');
    const response = await api.get('/items', { params: { page: 1, limit: 5 } });
    console.log('✅ Products fetched:', response.data?.data?.length || 0);
  } catch (error) {
    console.error('❌ Products fetch failed:', handleApiError(error));
  }

  console.log('✅ Product endpoints test complete');
};

/**
 * Test category endpoints
 */
export const testCategoryEndpoints = async () => {
  console.log('🔍 Testing category endpoints...');
  
  try {
    console.log('Testing /categories...');
    const response = await api.get('/categories');
    console.log('✅ Categories fetched:', response.data?.data?.length || 0);
  } catch (error) {
    console.error('❌ Categories fetch failed:', handleApiError(error));
  }

  console.log('✅ Category endpoints test complete');
};

/**
 * Run all tests
 */
export const runAllTests = async () => {
  console.log('🚀 Running all API tests...\n');
  
  const connected = await testConnection();
  
  if (connected) {
    await testProductEndpoints();
    await testCategoryEndpoints();
    await testAuthEndpoints();
  }
  
  console.log('\n✅ All tests complete!');
};

// Export test runner for use in console
if (typeof window !== 'undefined') {
  window.testAPI = {
    testConnection,
    testAuthEndpoints,
    testProductEndpoints,
    testCategoryEndpoints,
    runAllTests,
  };
  console.log('💡 API test functions available at window.testAPI');
}

export default {
  testConnection,
  testAuthEndpoints,
  testProductEndpoints,
  testCategoryEndpoints,
  runAllTests,
};
