import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiTool, FiGrid, FiBell } from 'react-icons/fi';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
    { path: '/facilities', label: 'Facilities', icon: <FiGrid /> },
    { path: '/bookings', label: 'Bookings', icon: <FiCalendar /> },
    { path: '/tickets', label: 'Tickets', icon: <FiTool /> },
    { path: '/notifications', label: 'Notifications', icon: <FiBell /> },
];

const Sidebar = () => {
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
            </nav>
        </aside>
    );
};

export default Sidebar;
