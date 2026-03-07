import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminRoute = () => {
    const { user, isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Check if user has ADMIN role (from JWT payload)
    if (user?.role !== 'ADMIN') {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                gap: '1rem',
            }}>
                <span style={{ fontSize: '3rem' }}>🚫</span>
                <h2 style={{ color: 'var(--danger)' }}>Access Denied</h2>
                <p style={{ color: 'var(--text-muted)' }}>You don't have permission to access this page.</p>
                <a href="/dashboard" className="btn btn-primary">Back to Dashboard</a>
            </div>
        );
    }

    return <Outlet />;
};

export default AdminRoute;
