import API from './api';

// TODO: Implement these functions by connecting to backend endpoints

export const notificationService = {
    getNotifications: () => API.get('/notifications'),
    getUnreadCount: () => API.get('/notifications/unread-count'),
    markAsRead: (id) => API.put(`/notifications/${id}/read`),
    markAllAsRead: () => API.put('/notifications/read-all'),
    deleteNotification: (id) => API.delete(`/notifications/${id}`),
};

export default notificationService;
