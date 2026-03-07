import { useState, useEffect, useCallback } from 'react';
import notificationService from '../services/notificationService';

const POLL_INTERVAL = 30000; // 30 seconds

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchNotifications = useCallback(async () => {
        try {
            setLoading(true);
            // TODO: Uncomment when backend is ready
            // const { data } = await notificationService.getNotifications();
            // setNotifications(data);
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchUnreadCount = useCallback(async () => {
        try {
            // TODO: Uncomment when backend is ready
            // const { data } = await notificationService.getUnreadCount();
            // setUnreadCount(data);
        } catch (error) {
            console.error('Failed to fetch unread count:', error);
        }
    }, []);

    const markAsRead = async (id) => {
        // TODO: Uncomment when backend is ready
        // await notificationService.markAsRead(id);
        // fetchNotifications();
        // fetchUnreadCount();
    };

    const markAllAsRead = async () => {
        // TODO: Uncomment when backend is ready
        // await notificationService.markAllAsRead();
        // fetchNotifications();
        // fetchUnreadCount();
    };

    // Poll for unread count
    useEffect(() => {
        fetchUnreadCount();
        const interval = setInterval(fetchUnreadCount, POLL_INTERVAL);
        return () => clearInterval(interval);
    }, [fetchUnreadCount]);

    return {
        notifications,
        unreadCount,
        loading,
        fetchNotifications,
        markAsRead,
        markAllAsRead,
    };
};

export default useNotifications;
