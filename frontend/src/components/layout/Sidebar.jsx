import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiTool, FiGrid, FiBell, FiShield, FiUsers } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'ADMIN';

    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
        { path: '/facilities', label: 'Facilities', icon: <FiGrid /> },
        { path: '/bookings', label: 'Bookings', icon: <FiCalendar /> },
        { path: '/tickets', label: 'Tickets', icon: <FiTool /> },
        { path: '/notifications', label: 'Notifications', icon: <FiBell /> },
    ];

    const adminItems = [
        { path: '/admin', label: 'Admin Panel', icon: <FiShield /> },
        { path: '/admin/users', label: 'Manage Users', icon: <FiUsers /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-section-label">Navigation</div>
            <nav>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}

                {isAdmin && (
                    <>
                        <div className="sidebar-divider" />
                        <div className="sidebar-section-label">Administration</div>
                        {adminItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/admin'}
                                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            >
                                {item.icon}
                                {item.label}
                            </NavLink>
                        ))}
                    </>
                )}
            </nav>
        </aside>
    );
};

export default Sidebar;
