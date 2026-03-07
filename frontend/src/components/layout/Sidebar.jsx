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
        { path: '/admin/users', label: 'Users', icon: <FiUsers /> },
    ];

    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            background: 'var(--sidebar-bg)',
            height: 'calc(100vh - var(--navbar-height))',
            position: 'sticky',
            top: 'var(--navbar-height)',
            padding: '1rem 0',
            overflowY: 'auto',
        }}>
            <nav>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1.5rem',
                            color: isActive ? '#fff' : 'var(--sidebar-text)',
                            background: isActive ? 'var(--sidebar-active)' : 'transparent',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: isActive ? 600 : 400,
                            transition: 'var(--transition)',
                        })}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}

                {/* Admin Section — only visible to ADMINs */}
                {isAdmin && (
                    <>
                        <div style={{
                            margin: '1rem 1.5rem 0.5rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--sidebar-text)',
                            opacity: 0.5,
                        }}>
                            Admin
                        </div>
                        {adminItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/admin'}
                                style={({ isActive }) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem 1.5rem',
                                    color: isActive ? '#fff' : 'var(--sidebar-text)',
                                    background: isActive ? 'var(--sidebar-active)' : 'transparent',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: isActive ? 600 : 400,
                                    transition: 'var(--transition)',
                                })}
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
