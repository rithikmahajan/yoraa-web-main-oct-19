import { useState, useEffect } from 'react';
import { handleApiError } from '../services/api';

/**
 * Custom hook for making API calls with loading and error states
 * @param {Function} apiFunction - API function to call
 * @param {boolean} immediate - Whether to call immediately on mount
 * @returns {Object} { data, loading, error, refetch }
 */
export const useApi = (apiFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = async (...params) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction(...params);
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    refetch: execute,
  };
};

/**
 * Hook for making paginated API calls
 * @param {Function} apiFunction - API function that accepts page and limit
 * @param {number} initialPage - Initial page number
 * @param {number} limit - Items per page
 * @returns {Object} Pagination state and controls
 */
export const usePagination = (apiFunction, initialPage = 1, limit = 20) => {
  const [page, setPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (loading) return;

    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction({ page, limit });
      const newData = response.data?.data || [];
      
      setData(prev => [...prev, ...newData]);
      setHasMore(newData.length === limit);
      setPage(prev => prev + 1);
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setPage(initialPage);
    setData([]);
    setHasMore(true);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    reset,
  };
};

/**
 * Hook for authentication state
 * @returns {Object} Auth state and functions
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing auth data
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing user data:', err);
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    updateUser,
  };
};

/**
 * Hook for debounced search
 * @param {Function} searchFunction - API search function
 * @param {number} delay - Debounce delay in ms
 * @returns {Object} Search state and function
 */
export const useSearch = (searchFunction, delay = 500) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await searchFunction(query);
        setResults(response.data?.data || []);
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [query, searchFunction, delay]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
  };
};

export default {
  useApi,
  usePagination,
  useAuth,
  useSearch,
};
