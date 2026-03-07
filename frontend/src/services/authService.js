import API from './api';

// TODO: Implement these functions by connecting to backend endpoints

export const authService = {
    login: (credentials) => API.post('/auth/login', credentials),
    register: (userData) => API.post('/auth/register', userData),
    getCurrentUser: () => API.get('/auth/me'),
};

export default authService;
