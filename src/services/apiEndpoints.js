import api from './api';

/**
 * Authentication API endpoints
 * NOTE: Updated to match actual backend implementation (Oct 19, 2025)
 * Backend uses /signup instead of /register, phNo instead of phone, etc.
 */
export const authAPI = {
  /**
   * Register a new user
   * BACKEND ENDPOINT: POST /auth/signup (not /register)
   * @param {Object} data - User registration data
   * @param {string} data.name - User's full name
   * @param {string} data.email - User's email address
   * @param {string} data.phone - User's phone number (converted to phNo for backend)
   * @param {string} data.password - User's password
   */
  register: (data) => api.post('/auth/signup', {
    name: data.name,
    email: data.email,
    phNo: data.phone || data.phNo, // Backend expects 'phNo' not 'phone'
    password: data.password,
    firebaseUid: data.firebaseUid,
    firebaseToken: data.firebaseToken
  }),

  /**
   * Login user with email/phone and password
   * BACKEND ENDPOINT: POST /auth/login
   * Backend expects separate 'email' OR 'phNo' fields (not 'identifier')
   * @param {Object} credentials - Login credentials
   * @param {string} credentials.identifier - Email or phone number
   * @param {string} credentials.email - Email (alternative)
   * @param {string} credentials.phone - Phone (alternative)
   * @param {string} credentials.password - Password
   */
  login: (credentials) => {
    // Detect if using email or phone
    const identifier = credentials.identifier || credentials.email || credentials.phone;
    const isEmail = identifier && identifier.includes('@');
    
    return api.post('/auth/login', {
      ...(isEmail 
        ? { email: identifier }
        : { phNo: identifier }
      ),
      password: credentials.password,
      firebaseToken: credentials.firebaseToken,
      firebaseUid: credentials.firebaseUid
    });
  },

  /**
   * Social login (Google/Apple/Facebook)
   * BACKEND ENDPOINT: POST /auth/login/firebase (not /social-login)
   * @param {Object} data - Social login data
   * @param {string} data.idToken - Firebase ID token
   * @param {string} data.provider - 'google', 'apple', or 'facebook' (optional)
   */
  socialLogin: (data) => api.post('/auth/login/firebase', {
    idToken: data.idToken || data.firebaseToken || data.token
  }),

  /**
   * Verify OTP
   * BACKEND ENDPOINT: POST /auth/verifyOtp (camelCase, not kebab-case)
   * @param {Object} data - OTP verification data
   * @param {string} data.phone - Phone number (converted to phoneNumber for backend)
   * @param {string} data.otp - OTP code
   */
  verifyOTP: (data) => api.post('/auth/verifyOtp', {
    phoneNumber: data.phone || data.phoneNumber || data.phNo,
    otp: data.otp
  }),

  /**
   * Resend OTP
   * BACKEND ENDPOINT: POST /auth/generate-otp (not /resend-otp)
   * @param {Object} data - Phone number
   * @param {string} data.phone - Phone number to send OTP
   */
  resendOTP: (data) => api.post('/auth/generate-otp', {
    phoneNumber: data.phone || data.phoneNumber || data.phNo
  }),

  /**
   * Logout user
   * BACKEND ENDPOINT: POST /auth/logout ✅ (matches)
   */
  logout: () => api.post('/auth/logout'),

  /**
   * Request password reset
   * BACKEND STATUS: Email-based reset NOT implemented yet
   * Backend only supports phone-based reset via /auth/resetPassword
   * @param {Object} data - Password reset request data
   * @param {string} data.email - User's email address
   * @param {string} data.phone - User's phone (for phone-based reset)
   */
  forgotPassword: (data) => {
    if (data.email && !data.phone) {
      // Email-based reset not available in backend yet
      return Promise.reject({
        response: {
          data: {
            message: 'Password reset via email is not yet available. Please use phone number.',
            success: false,
            statusCode: 501
          }
        }
      });
    }
    // Use phone-based reset
    return api.post('/auth/resetPassword', {
      phNo: data.phone || data.phNo
    });
  },

  /**
   * Reset password
   * BACKEND ENDPOINT: POST /auth/resetPassword (camelCase, phone-based only)
   * Token-based reset not implemented in backend yet
   * @param {Object} data - Password reset data
   * @param {string} data.phone - Phone number
   * @param {string} data.newPassword - New password
   */
  resetPassword: (data) => api.post('/auth/resetPassword', {
    phNo: data.phone || data.phNo,
    newPassword: data.newPassword || data.password
  }),

  /**
   * Refresh authentication token
   * BACKEND ENDPOINT: POST /auth/refresh-token ✅ (matches)
   */
  refreshToken: () => api.post('/auth/refresh-token'),
};

/**
 * User Profile API endpoints
 */
export const userAPI = {
  /**
   * Get current user profile
   */
  getProfile: () => api.get('/user/profile'),

  /**
   * Update user profile
   * @param {Object} data - Profile data to update
   * @param {string} data.name - User's name
   * @param {string} data.email - User's email
   * @param {string} data.phone - User's phone
   * @param {string} data.avatar - User's avatar URL
   */
  updateProfile: (data) => api.put('/user/profile', data),

  /**
   * Get specific user details
   * @param {string} userId - User ID
   */
  getUser: (userId) => api.get(`/user/${userId}`),

  /**
   * Delete user account
   * @param {string} userId - User ID
   */
  deleteAccount: (userId) => api.delete(`/user/${userId}`),

  /**
   * Link social accounts
   * @param {Object} data - Account linking data
   */
  linkAccounts: (data) => api.post('/userProfile/link-accounts', data),
};

/**
 * Products/Items API endpoints
 */
export const productAPI = {
  /**
   * Get all products with pagination
   * @param {Object} params - Query parameters
   * @param {number} params.page - Page number (default: 1)
   * @param {number} params.limit - Items per page (default: 20)
   */
  getAll: (params = { page: 1, limit: 20 }) => api.get('/items', { params }),

  /**
   * Get single product by ID
   * @param {string} id - Product ID
   */
  getById: (id) => api.get(`/items/${id}`),

  /**
   * Get products by category
   * @param {string} categoryId - Category ID
   */
  getByCategory: (categoryId) => api.get(`/items/category/${categoryId}`),

  /**
   * Search products
   * @param {string} query - Search query
   */
  search: (query) => api.get('/items/search', { params: { q: query } }),

  /**
   * Get multiple products by IDs
   * @param {Array<string>} ids - Array of product IDs
   */
  bulkFetch: (ids) => api.post('/items/bulk-fetch', { ids }),
};

/**
 * Categories API endpoints
 */
export const categoryAPI = {
  /**
   * Get all categories
   */
  getAll: () => api.get('/categories'),

  /**
   * Get category by ID
   * @param {string} id - Category ID
   */
  getById: (id) => api.get(`/categories/${id}`),

  /**
   * Get all subcategories
   */
  getSubcategories: () => api.get('/subcategories'),

  /**
   * Get subcategory by ID
   * @param {string} id - Subcategory ID
   */
  getSubcategoryById: (id) => api.get(`/subcategories/${id}`),
};

/**
 * Shopping Cart API endpoints
 */
export const cartAPI = {
  /**
   * Get user's cart
   */
  get: () => api.get('/cart'),

  /**
   * Add item to cart
   * @param {Object} data - Cart item data
   * @param {string} data.itemId - Product ID
   * @param {number} data.quantity - Quantity to add
   * @param {string} data.size - Product size (optional)
   * @param {string} data.color - Product color (optional)
   */
  add: (data) => api.post('/cart/add', data),

  /**
   * Update cart item quantity
   * @param {string} itemId - Cart item ID
   * @param {Object} data - Update data
   * @param {number} data.quantity - New quantity
   */
  update: (itemId, data) => api.put(`/cart/update/${itemId}`, data),

  /**
   * Remove item from cart
   * @param {string} itemId - Cart item ID
   */
  remove: (itemId) => api.delete(`/cart/remove/${itemId}`),

  /**
   * Clear entire cart
   */
  clear: () => api.delete('/cart/clear'),
};

/**
 * Wishlist API endpoints
 */
export const wishlistAPI = {
  /**
   * Get user's wishlist
   */
  get: () => api.get('/wishlist'),

  /**
   * Add item to wishlist
   * @param {Object} data - Wishlist item data
   * @param {string} data.itemId - Product ID
   */
  add: (data) => api.post('/wishlist/add', data),

  /**
   * Remove item from wishlist
   * @param {string} itemId - Wishlist item ID
   */
  remove: (itemId) => api.delete(`/wishlist/remove/${itemId}`),

  /**
   * Move wishlist item to cart
   * @param {Object} data - Item data
   * @param {string} data.itemId - Wishlist item ID
   */
  moveToCart: (data) => api.post('/wishlist/move-to-cart', data),
};

/**
 * Address Management API endpoints
 */
export const addressAPI = {
  /**
   * Get all user addresses
   */
  getAll: () => api.get('/address'),

  /**
   * Add new address
   * @param {Object} data - Address data
   */
  create: (data) => api.post('/address', data),

  /**
   * Update address
   * @param {string} id - Address ID
   * @param {Object} data - Updated address data
   */
  update: (id, data) => api.put(`/address/${id}`, data),

  /**
   * Delete address
   * @param {string} id - Address ID
   */
  delete: (id) => api.delete(`/address/${id}`),

  /**
   * Set default address
   * @param {string} id - Address ID
   */
  setDefault: (id) => api.put(`/address/${id}/default`),
};

/**
 * Payment API endpoints
 */
export const paymentAPI = {
  /**
   * Get Razorpay public key
   */
  getKey: () => api.get('/payment/razorpay-key'),

  /**
   * Create Razorpay order
   * @param {Object} data - Order data
   * @param {number} data.amount - Order amount
   * @param {string} data.currency - Currency code (default: INR)
   * @param {Array} data.items - Cart items
   * @param {string} data.addressId - Delivery address ID
   */
  createOrder: (data) => api.post('/payment/create-order', data),

  /**
   * Verify payment
   * @param {Object} data - Payment verification data
   * @param {string} data.razorpay_order_id - Razorpay order ID
   * @param {string} data.razorpay_payment_id - Razorpay payment ID
   * @param {string} data.razorpay_signature - Razorpay signature
   */
  verify: (data) => api.post('/payment/verify', data),
};

/**
 * Orders API endpoints
 */
export const orderAPI = {
  /**
   * Get all user orders
   */
  getAll: () => api.get('/orders'),

  /**
   * Get order by ID
   * @param {string} id - Order ID
   */
  getById: (id) => api.get(`/orders/${id}`),

  /**
   * Create new order
   * @param {Object} data - Order data
   */
  create: (data) => api.post('/orders', data),

  /**
   * Cancel order
   * @param {string} id - Order ID
   */
  cancel: (id) => api.put(`/orders/${id}/cancel`),
};

/**
 * Reviews & Ratings API endpoints
 */
export const reviewAPI = {
  /**
   * Get reviews for a product
   * @param {string} productId - Product ID
   */
  getByProduct: (productId) => api.get(`/reviews/${productId}`),

  /**
   * Submit a review
   * @param {Object} data - Review data
   * @param {string} data.productId - Product ID
   * @param {number} data.rating - Rating (1-5)
   * @param {string} data.comment - Review comment
   */
  create: (data) => api.post('/reviews', data),

  /**
   * Update review
   * @param {string} id - Review ID
   * @param {Object} data - Updated review data
   */
  update: (id, data) => api.put(`/reviews/${id}`, data),

  /**
   * Delete review
   * @param {string} id - Review ID
   */
  delete: (id) => api.delete(`/reviews/${id}`),
};

/**
 * Promo Codes API endpoints
 */
export const promoAPI = {
  /**
   * Validate promo code
   * @param {Object} data - Promo code data
   * @param {string} data.code - Promo code
   * @param {number} data.amount - Order amount
   */
  validate: (data) => api.post('/promocodes/validate', data),

  /**
   * Get available promo codes
   */
  getAvailable: () => api.get('/promocodes/available'),
};

/**
 * Notifications API endpoints
 */
export const notificationAPI = {
  /**
   * Get user notifications
   */
  getAll: () => api.get('/notifications'),

  /**
   * Mark notification as read
   * @param {string} id - Notification ID
   */
  markAsRead: (id) => api.put(`/notifications/${id}/read`),

  /**
   * Delete notification
   * @param {string} id - Notification ID
   */
  delete: (id) => api.delete(`/notifications/${id}`),

  /**
   * Register FCM token for push notifications
   * @param {Object} data - FCM data
   * @param {string} data.token - FCM token
   */
  registerFCM: (data) => api.post('/notifications/register-fcm', data),
};

/**
 * Chat Support API endpoints
 */
export const chatAPI = {
  /**
   * Get user conversations
   */
  getConversations: () => api.get('/chat/conversations'),

  /**
   * Send message
   * @param {Object} data - Message data
   * @param {string} data.message - Message text
   * @param {string} data.conversationId - Conversation ID (optional)
   */
  send: (data) => api.post('/chat/send', data),

  /**
   * Get conversation messages
   * @param {string} conversationId - Conversation ID
   */
  getMessages: (conversationId) => api.get(`/chat/messages/${conversationId}`),
};

/**
 * Points & Rewards API endpoints
 */
export const pointsAPI = {
  /**
   * Get points balance
   */
  getBalance: () => api.get('/points/balance'),

  /**
   * Get points transaction history
   */
  getHistory: () => api.get('/points/history'),

  /**
   * Redeem points
   * @param {Object} data - Redemption data
   * @param {number} data.points - Points to redeem
   */
  redeem: (data) => api.post('/points/redeem', data),
};

/**
 * Invite Friends API endpoints
 */
export const inviteAPI = {
  /**
   * Get user's invite code
   */
  getCode: () => api.get('/invite/code'),

  /**
   * Send invite to friend
   * @param {Object} data - Invite data
   * @param {string} data.email - Friend's email
   * @param {string} data.phone - Friend's phone
   */
  send: (data) => api.post('/invite/send', data),

  /**
   * Get invite rewards earned
   */
  getRewards: () => api.get('/invite/rewards'),
};

/**
 * Inbox API endpoints
 */
export const inboxAPI = {
  /**
   * Get user inbox messages
   */
  getAll: () => api.get('/inbox'),

  /**
   * Get specific message
   * @param {string} id - Message ID
   */
  getById: (id) => api.get(`/inbox/${id}`),

  /**
   * Mark message as read
   * @param {string} id - Message ID
   */
  markAsRead: (id) => api.put(`/inbox/${id}/read`),

  /**
   * Delete message
   * @param {string} id - Message ID
   */
  delete: (id) => api.delete(`/inbox/${id}`),
};

/**
 * Banners API endpoints
 */
export const bannerAPI = {
  /**
   * Get active banners
   */
  getAll: () => api.get('/banners'),

  /**
   * Get home page banners
   */
  getHome: () => api.get('/banners/home'),
};

/**
 * FAQs API endpoints
 */
export const faqAPI = {
  /**
   * Get all FAQs
   */
  getAll: () => api.get('/faqs'),

  /**
   * Get FAQs by category
   * @param {string} category - Category name
   */
  getByCategory: (category) => api.get(`/faqs/category/${category}`),
};

/**
 * Configuration API endpoints
 */
export const configAPI = {
  /**
   * Get Razorpay public key
   */
  getRazorpayKey: () => api.get('/config/razorpay-key'),

  /**
   * Get app configuration
   */
  getAppSettings: () => api.get('/config/app-settings'),
};

export default api;
