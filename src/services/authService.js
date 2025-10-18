import { 
  auth, 
  googleProvider, 
  appleProvider,
  signInWithPopup,
  signInWithEmailAndPassword as firebaseSignInWithEmail,
  createUserWithEmailAndPassword as firebaseCreateUser,
  signOut as firebaseSignOut,
  sendPasswordResetEmail as firebaseSendPasswordReset,
  updateProfile as firebaseUpdateProfile
} from '../firebase/FirebaseConfig';
import { authAPI } from './apiEndpoints';
import { setAuthToken, setUserData, removeAuthToken, removeUserData } from '../utils/auth';

/**
 * Authentication Service
 * Combines Firebase Authentication with Backend API
 */

/**
 * Register user with email and password
 * @param {Object} userData - User registration data
 * @param {string} userData.name - User's full name
 * @param {string} userData.email - User's email
 * @param {string} userData.password - User's password
 * @param {string} userData.phone - User's phone number (optional)
 */
export const registerWithEmail = async (userData) => {
  try {
    // 1. Create user in Firebase
    const userCredential = await firebaseCreateUser(
      auth,
      userData.email,
      userData.password
    );

    // 2. Update Firebase profile with name
    if (userData.name) {
      await firebaseUpdateProfile(userCredential.user, {
        displayName: userData.name
      });
    }

    // 3. Get Firebase ID token
    const firebaseToken = await userCredential.user.getIdToken();

    // 4. Register user in backend
    const response = await authAPI.register({
      name: userData.name,
      email: userData.email,
      phone: userData.phone || '',
      password: userData.password,
      firebaseUid: userCredential.user.uid,
      firebaseToken: firebaseToken
    });

    // 5. Store backend token and user data
    if (response.data?.data?.token) {
      setAuthToken(response.data.data.token);
    }
    if (response.data?.data?.user) {
      setUserData(response.data.data.user);
    }

    return {
      success: true,
      user: response.data.data.user,
      firebaseUser: userCredential.user,
      message: 'Registration successful!'
    };
  } catch (error) {
    console.error('Registration error:', error);
    
    // Clean up Firebase user if backend registration fails
    if (auth.currentUser) {
      await auth.currentUser.delete().catch(console.error);
    }

    throw {
      message: error.response?.data?.message || error.message || 'Registration failed',
      code: error.code
    };
  }
};

/**
 * Login user with email and password
 * @param {Object} credentials
 * @param {string} credentials.email - User's email
 * @param {string} credentials.password - User's password
 */
export const loginWithEmail = async (credentials) => {
  try {
    // 1. Sign in with Firebase
    const userCredential = await firebaseSignInWithEmail(
      auth,
      credentials.email,
      credentials.password
    );

    // 2. Get Firebase ID token
    const firebaseToken = await userCredential.user.getIdToken();

    // 3. Login to backend
    const response = await authAPI.login({
      email: credentials.email,
      password: credentials.password,
      firebaseToken: firebaseToken,
      firebaseUid: userCredential.user.uid
    });

    // 4. Store backend token and user data
    if (response.data?.data?.token) {
      setAuthToken(response.data.data.token);
    }
    if (response.data?.data?.user) {
      setUserData(response.data.data.user);
    }

    return {
      success: true,
      user: response.data.data.user,
      firebaseUser: userCredential.user,
      message: 'Login successful!'
    };
  } catch (error) {
    console.error('Login error:', error);
    throw {
      message: error.response?.data?.message || error.message || 'Login failed',
      code: error.code
    };
  }
};

/**
 * Login user with phone and password
 * @param {Object} credentials
 * @param {string} credentials.phone - User's phone number
 * @param {string} credentials.password - User's password
 */
export const loginWithPhone = async (credentials) => {
  try {
    // Login directly to backend (phone auth handled by backend)
    const response = await authAPI.login({
      phone: credentials.phone,
      password: credentials.password
    });

    // Store backend token and user data
    if (response.data?.data?.token) {
      setAuthToken(response.data.data.token);
    }
    if (response.data?.data?.user) {
      setUserData(response.data.data.user);
    }

    return {
      success: true,
      user: response.data.data.user,
      message: 'Login successful!'
    };
  } catch (error) {
    console.error('Phone login error:', error);
    throw {
      message: error.response?.data?.message || error.message || 'Login failed',
      code: error.code
    };
  }
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async () => {
  try {
    // 1. Sign in with Google via Firebase
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // 2. Get Firebase ID token
    const firebaseToken = await user.getIdToken();

    // 3. Send to backend for social login
    const response = await authAPI.socialLogin({
      provider: 'google',
      firebaseToken: firebaseToken,
      firebaseUid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL
    });

    // 4. Store backend token and user data
    if (response.data?.data?.token) {
      setAuthToken(response.data.data.token);
    }
    if (response.data?.data?.user) {
      setUserData(response.data.data.user);
    }

    return {
      success: true,
      user: response.data.data.user,
      firebaseUser: user,
      message: 'Google sign-in successful!'
    };
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw {
      message: error.response?.data?.message || error.message || 'Google sign-in failed',
      code: error.code
    };
  }
};

/**
 * Sign in with Apple
 */
export const signInWithApple = async () => {
  try {
    // 1. Sign in with Apple via Firebase
    const result = await signInWithPopup(auth, appleProvider);
    const user = result.user;

    // 2. Get Firebase ID token
    const firebaseToken = await user.getIdToken();

    // 3. Send to backend for social login
    const response = await authAPI.socialLogin({
      provider: 'apple',
      firebaseToken: firebaseToken,
      firebaseUid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL
    });

    // 4. Store backend token and user data
    if (response.data?.data?.token) {
      setAuthToken(response.data.data.token);
    }
    if (response.data?.data?.user) {
      setUserData(response.data.data.user);
    }

    return {
      success: true,
      user: response.data.data.user,
      firebaseUser: user,
      message: 'Apple sign-in successful!'
    };
  } catch (error) {
    console.error('Apple sign-in error:', error);
    throw {
      message: error.response?.data?.message || error.message || 'Apple sign-in failed',
      code: error.code
    };
  }
};

/**
 * Logout user (from both Firebase and backend)
 */
export const logout = async () => {
  try {
    // 1. Logout from backend
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Backend logout error:', error);
    }

    // 2. Sign out from Firebase
    await firebaseSignOut(auth);

    // 3. Clear local storage
    removeAuthToken();
    removeUserData();

    return {
      success: true,
      message: 'Logout successful!'
    };
  } catch (error) {
    console.error('Logout error:', error);
    // Still clear local data even if logout fails
    removeAuthToken();
    removeUserData();
    throw {
      message: error.message || 'Logout failed',
      code: error.code
    };
  }
};

/**
 * Send password reset email
 * @param {string} email - User's email address
 */
export const resetPassword = async (email) => {
  try {
    // Send password reset email via Firebase
    await firebaseSendPasswordReset(auth, email);

    return {
      success: true,
      message: 'Password reset email sent!'
    };
  } catch (error) {
    console.error('Password reset error:', error);
    throw {
      message: error.message || 'Failed to send password reset email',
      code: error.code
    };
  }
};

/**
 * Get current Firebase user
 */
export const getCurrentFirebaseUser = () => {
  return auth.currentUser;
};

/**
 * Get Firebase ID token for current user
 */
export const getFirebaseToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return !!auth.currentUser;
};

/**
 * Listen to auth state changes
 * @param {Function} callback - Callback function
 */
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

/**
 * Update user profile
 * @param {Object} profileData - Profile data to update
 */
export const updateUserProfile = async (profileData) => {
  try {
    const user = auth.currentUser;
    
    // Update Firebase profile
    if (user && (profileData.displayName || profileData.photoURL)) {
      await firebaseUpdateProfile(user, {
        displayName: profileData.displayName,
        photoURL: profileData.photoURL
      });
    }

    // Update backend profile
    const response = await authAPI.updateProfile(profileData);

    // Update local user data
    if (response.data?.data) {
      setUserData(response.data.data);
    }

    return {
      success: true,
      user: response.data.data,
      message: 'Profile updated successfully!'
    };
  } catch (error) {
    console.error('Profile update error:', error);
    throw {
      message: error.response?.data?.message || error.message || 'Failed to update profile',
      code: error.code
    };
  }
};

export default {
  registerWithEmail,
  loginWithEmail,
  loginWithPhone,
  signInWithGoogle,
  signInWithApple,
  logout,
  resetPassword,
  getCurrentFirebaseUser,
  getFirebaseToken,
  isAuthenticated,
  onAuthStateChanged,
  updateUserProfile
};
