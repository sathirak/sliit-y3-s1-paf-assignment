import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav style={{
            height: 'var(--navbar-height)',
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 10,
        }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--primary)' }}>
                🏫 Smart Campus
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Notification Bell — TODO: add unread badge */}
                <Link to="/notifications" style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                    <FiBell />
                </Link>

                {/* User Info */}
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {user?.email || 'User'}
                </span>

                <button onClick={logout} className="btn btn-outline" style={{ fontSize: '0.75rem' }}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
