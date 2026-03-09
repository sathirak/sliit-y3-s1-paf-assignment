import { useAuth } from '../../context/AuthContext';
import { FiGrid, FiCalendar, FiTool, FiBell } from 'react-icons/fi';

const Dashboard = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Facilities', value: '—', icon: <FiGrid />, variant: 'primary' },
        { label: 'Active Bookings', value: '—', icon: <FiCalendar />, variant: 'secondary' },
        { label: 'Open Tickets', value: '—', icon: <FiTool />, variant: 'warning' },
        { label: 'Notifications', value: '—', icon: <FiBell />, variant: 'danger' },
    ];

    return (
        <div className="animate-in">
            <div className="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                        Welcome back, <strong>{user?.firstName || user?.email || 'User'}</strong>
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {stats.map((stat) => (
                    <div key={stat.label} className={`stat-card ${stat.variant}`}>
                        <p className="stat-label">{stat.label}</p>
                        <p className="stat-value">{stat.value}</p>
                        <span className="stat-icon">{stat.icon}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
