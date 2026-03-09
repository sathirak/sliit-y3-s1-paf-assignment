import { Link } from 'react-router-dom';
import { FiBell, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import useNotifications from '../../hooks/useNotifications';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { unreadCount } = useNotifications();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-dot"></span>
                Smart Campus
            </div>

            <div className="navbar-actions">
                <Link to="/notifications" className="notification-btn">
                    <FiBell />
                    {unreadCount > 0 && (
                        <span className="notification-badge">
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                    )}
                </Link>

                <div className="navbar-user">
                    <div>
                        <div className="user-name">{user?.firstName || user?.email || 'User'}</div>
                        <div className="user-role">{user?.role || 'USER'}</div>
                    </div>
                </div>

                <button onClick={logout} className="btn btn-ghost" title="Logout" style={{ fontSize: '1.1rem' }}>
                    <FiLogOut />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
