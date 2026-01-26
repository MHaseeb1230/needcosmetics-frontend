import axios from 'axios';

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Debug: Log API URL (remove in production if needed)
if (import.meta.env.DEV) {
  console.log('🔗 API Base URL:', API_BASE_URL);
  console.log('🌍 Environment:', import.meta.env.MODE);
  console.log('📦 VITE_API_URL:', import.meta.env.VITE_API_URL);
}

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Get or create session ID for guest users
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId && !token) {
      sessionId = generateSessionId();
      localStorage.setItem('sessionId', sessionId);
    }
    if (sessionId) {
      config.headers['X-Session-ID'] = sessionId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle 401 Unauthorized - Token expired
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Redirect to login if needed
        if (window.location.pathname !== '/auth') {
          // Optional: Show notification
          console.log('Session expired. Please login again.');
        }
      }

      // Handle 403 Forbidden
      if (error.response.status === 403) {
        console.error('Access forbidden');
      }

      // Handle 500 Server Error
      if (error.response.status === 500) {
        console.error('Server error. Please try again later.');
      }
    } else if (error.request) {
      // Network error
      console.error('Network error. Please check your connection.');
    }

    return Promise.reject(error);
  }
);

// Generate unique session ID for guest users
function generateSessionId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default api;
export { API_BASE_URL };





