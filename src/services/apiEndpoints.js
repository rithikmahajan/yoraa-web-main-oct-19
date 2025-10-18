import api from './api';

/**
 * Authentication API endpoints
 */
export const authAPI = {
  /**
   * Register a new user
   * @param {Object} data - User registration data
   * @param {string} data.name - User's full name
   * @param {string} data.email - User's email address
   * @param {string} data.phone - User's phone number
   * @param {string} data.password - User's password
   */
  register: (data) => api.post('/auth/register', data),

  /**
   * Login user with email/phone and password
   * @param {Object} credentials - Login credentials
   * @param {string} credentials.phone - Phone number or email
   * @param {string} credentials.password - Password
   */
  login: (credentials) => api.post('/auth/login', credentials),

  /**
   * Social login (Google/Apple)
   * @param {Object} data - Social login data
   * @param {string} data.provider - 'google' or 'apple'
   * @param {string} data.token - Social provider token
   */
  socialLogin: (data) => api.post('/auth/social-login', data),

  /**
   * Verify OTP
   * @param {Object} data - OTP verification data
   * @param {string} data.phone - Phone number
   * @param {string} data.otp - OTP code
   */
  verifyOTP: (data) => api.post('/auth/verify-otp', data),

  /**
   * Resend OTP
   * @param {Object} data - Phone number
   * @param {string} data.phone - Phone number to send OTP
   */
  resendOTP: (data) => api.post('/auth/resend-otp', data),

  /**
   * Logout user
   */
  logout: () => api.post('/auth/logout'),

  /**
   * Request password reset
   * @param {Object} data - Password reset request data
   * @param {string} data.email - User's email address
   */
  forgotPassword: (data) => api.post('/auth/forgot-password', data),

  /**
   * Reset password with token
   * @param {Object} data - Password reset data
   * @param {string} data.token - Reset token from email
   * @param {string} data.password - New password
   */
  resetPassword: (data) => api.post('/auth/reset-password', data),
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
