const NotificationPanel = () => {
    return (
        <div>
            <div className="page-header">
                <h1>🔔 Notifications</h1>
                <button className="btn btn-outline">Mark all as read</button>
            </div>

            {/* TODO: Fetch notifications from /api/notifications */}
            <div className="card">
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                    No notifications yet. Notifications will appear here when booking/ticket events happen.
                </p>
            </div>
        </div>
    );
};

export default NotificationPanel;
