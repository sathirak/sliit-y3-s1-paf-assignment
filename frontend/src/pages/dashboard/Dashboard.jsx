import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="page-header">
                <h1>📊 Dashboard</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {/* TODO: Replace with real data from API */}
                <div className="card">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Total Facilities</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>—</p>
                </div>
                <div className="card">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Active Bookings</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>—</p>
                </div>
                <div className="card">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Open Tickets</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--warning)' }}>—</p>
                </div>
                <div className="card">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Unread Notifications</p>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--danger)' }}>—</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
