import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Call authService.login({ email, password })
        // TODO: On success, call login(token) and navigate to dashboard
        toast.info('Login not implemented yet — connect to backend');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg)',
        }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--primary)' }}>🏫 Smart Campus</h1>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Sign in to your account
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                        Sign In
                    </button>
                </form>

                {/* --- DEV MODE SHORTCUTS --- */}
                <div style={{ marginTop: '2rem', padding: '1rem', background: '#f3f4f6', borderRadius: '8px', border: '1px dashed #ccc' }}>
                    <p style={{ fontSize: '0.75rem', color: '#666', textAlign: 'center', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        🛠 Dev Mode (Bypass Login)
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            type="button"
                            className="btn btn-outline"
                            style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem' }}
                            onClick={() => {
                                // Fake JWT for Admin (exp: year 2286)
                                const fakeAdminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbjEiLCJuYW1lIjoiQWRtaW4gVXNlciIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJyb2xlIjoiQURNSU4iLCJleHAiOjk5OTk5OTk5OTl9.signature";
                                login(fakeAdminToken);
                                navigate('/admin');
                            }}
                        >
                            Log in as Admin
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline"
                            style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem' }}
                            onClick={() => {
                                // Fake JWT for User (exp: year 2286)
                                const fakeUserToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJSZWd1bGFyIFVzZXIiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiVVNFUiIsImV4cCI6OTk5OTk5OTk5OX0.signature";
                                login(fakeUserToken);
                                navigate('/dashboard');
                            }}
                        >
                            Log in as User
                        </button>
                    </div>
                </div>
                {/* --------------------------- */}


                {/* TODO: Add Google OAuth button here */}
                {/* <GoogleLogin onSuccess={handleGoogleLogin} /> */}

                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
