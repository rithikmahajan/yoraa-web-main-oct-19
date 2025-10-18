/**
 * Authentication helper functions
 */

/**
 * Store authentication token
 * @param {string} token - JWT token
 */
export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Get authentication token
 * @returns {string|null} JWT token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem('token');
};

/**
 * Remove authentication token
 */
export const removeAuthToken = () => {
  localStorage.removeItem('token');
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if token exists
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};

/**
 * Store user data
 * @param {Object} user - User object
 */
export const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

/**
 * Get user data
 * @returns {Object|null} User object or null
 */
export const getUserData = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Remove user data
 */
export const removeUserData = () => {
  localStorage.removeItem('user');
};

/**
 * Logout user - Clear all auth data
 */
export const logoutUser = () => {
  removeAuthToken();
  removeUserData();
  // Optionally redirect to login
  // window.location.href = '/login';
};

/**
 * Handle login response
 * @param {Object} response - API response
 */
export const handleLoginResponse = (response) => {
  if (response.data?.data?.token) {
    setAuthToken(response.data.data.token);
  }
  if (response.data?.data?.user) {
    setUserData(response.data.data.user);
  }
};
