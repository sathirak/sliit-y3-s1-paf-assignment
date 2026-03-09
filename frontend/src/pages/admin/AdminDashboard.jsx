import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiUsers, FiCalendar, FiGrid, FiTool, FiArrowRight } from 'react-icons/fi';

const adminCards = [
    {
        title: 'User Management',
        description: 'View, manage roles, and remove users',
        icon: <FiUsers />,
        link: '/admin/users',
        linkText: 'Manage Users',
        variant: 'primary',
    },
    {
        title: 'Pending Bookings',
        description: 'Approve or reject booking requests',
        icon: <FiCalendar />,
        link: '/bookings',
        linkText: 'Review Bookings',
        variant: 'secondary',
    },
    {
        title: 'Facilities',
        description: 'Add, edit, or deactivate campus facilities',
        icon: <FiGrid />,
        link: '/facilities',
        linkText: 'Manage Facilities',
        variant: 'warning',
    },
    {
        title: 'Incident Tickets',
        description: 'Assign technicians and track resolutions',
        icon: <FiTool />,
        link: '/tickets',
        linkText: 'Manage Tickets',
        variant: 'danger',
    },
];

const VARIANT_COLORS = {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    warning: 'var(--warning)',
    danger: 'var(--danger)',
};

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="animate-in">
            <div className="page-header">
                <div>
                    <h1>Admin Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                        Welcome, <strong>{user?.firstName || user?.email}</strong>. Manage your campus from here.
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {adminCards.map((card) => (
                    <div
                        key={card.title}
                        className="card card-interactive"
                        style={{ borderLeft: `4px solid ${VARIANT_COLORS[card.variant]}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: 'var(--radius)',
                                    background: `var(--${card.variant}-light)`, color: VARIANT_COLORS[card.variant],
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem',
                                }}>
                                    {card.icon}
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{card.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                                {card.description}
                            </p>
                        </div>
                        <Link to={card.link} className="btn btn-outline btn-sm" style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }}>
                            {card.linkText} <FiArrowRight />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
