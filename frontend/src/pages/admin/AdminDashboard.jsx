import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="page-header">
                <h1>⚙️ Admin Dashboard</h1>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Welcome, <strong>{user?.name || user?.email}</strong>. Manage your campus from here.
            </p>

            {/* Admin Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>

                {/* Users Card */}
                <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Management</p>
                            <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>👥 Users</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                                View, manage roles, and remove users
                            </p>
                        </div>
                    </div>
                    <a href="/admin/users" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.8rem' }}>
                        Manage Users →
                    </a>
                </div>

                {/* Bookings Card */}
                <div className="card" style={{ borderLeft: '4px solid var(--secondary)' }}>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Booking Reviews</p>
                        <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>📅 Pending Bookings</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                            Approve or reject booking requests
                        </p>
                    </div>
                    <a href="/bookings" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.8rem' }}>
                        Review Bookings →
                    </a>
                </div>

                {/* Facilities Card */}
                <div className="card" style={{ borderLeft: '4px solid var(--warning)' }}>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Facility Management</p>
                        <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>🏢 Facilities</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                            Add, edit, or deactivate campus facilities
                        </p>
                    </div>
                    <a href="/facilities" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.8rem' }}>
                        Manage Facilities →
                    </a>
                </div>

                {/* Tickets Card */}
                <div className="card" style={{ borderLeft: '4px solid var(--danger)' }}>
                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Incident Tickets</p>
                        <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>🎫 Open Tickets</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                            Assign technicians and track resolutions
                        </p>
                    </div>
                    <a href="/tickets" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.8rem' }}>
                        Manage Tickets →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
