import { useEffect } from 'react';
import { FiCheck, FiCheckCircle, FiTrash2, FiBell } from 'react-icons/fi';
import useNotifications from '../../hooks/useNotifications';

const TYPE_ICONS = {
    BOOKING_UPDATE: '📅',
    TICKET_UPDATE: '🎫',
    NEW_COMMENT: '💬',
    SYSTEM: '⚙️',
    ASSIGNMENT: '👤',
};

const NotificationPanel = () => {
    const {
        notifications,
        unreadCount,
        loading,
        fetchNotifications,
        markAsRead,
        markAllAsRead,
        deleteNotification,
    } = useNotifications();

    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    const formatTime = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="animate-in">
            <div className="page-header">
                <div>
                    <h1>Notifications</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                        {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
                    </p>
                </div>
                {unreadCount > 0 && (
                    <button onClick={markAllAsRead} className="btn btn-outline btn-sm">
                        <FiCheckCircle /> Mark all as read
                    </button>
                )}
            </div>

            {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="skeleton" style={{ height: '80px', borderRadius: 'var(--radius-lg)' }} />
                    ))}
                </div>
            ) : notifications.length === 0 ? (
                <div className="card">
                    <div className="empty-state">
                        <div className="empty-icon"><FiBell /></div>
                        <h3>No notifications yet</h3>
                        <p>Notifications will appear here when booking or ticket events happen.</p>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="card"
                            style={{
                                padding: '1rem 1.25rem',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                opacity: notification.read ? 0.65 : 1,
                                borderLeft: notification.read ? 'none' : '3px solid var(--primary)',
                                transition: 'var(--transition)',
                            }}
                        >
                            {/* Icon */}
                            <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.125rem' }}>
                                {TYPE_ICONS[notification.type] || '🔔'}
                            </span>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>
                                        {notification.title}
                                    </h4>
                                    {!notification.read && (
                                        <span className="badge badge-primary" style={{ fontSize: '0.5625rem' }}>NEW</span>
                                    )}
                                </div>
                                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                                    {notification.message}
                                </p>
                                <span style={{ fontSize: '0.6875rem', color: 'var(--text-placeholder)', marginTop: '0.375rem', display: 'block' }}>
                                    {formatTime(notification.createdAt)}
                                </span>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
                                {!notification.read && (
                                    <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="btn btn-ghost btn-sm"
                                        title="Mark as read"
                                    >
                                        <FiCheck />
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteNotification(notification.id)}
                                    className="btn btn-ghost btn-sm"
                                    title="Delete"
                                    style={{ color: 'var(--danger)' }}
                                >
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationPanel;
