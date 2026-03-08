import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authService from '../../services/authService';

const Register = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authService.register(form);
            toast.success('Account created successfully! Please sign in.');
            navigate('/login');
        } catch (err) {
            const message = err.response?.data?.message || 'Registration failed. Please try again.';
            toast.error(message);
        } finally {
            setLoading(false);
        }
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
                <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--primary)' }}>🏫 Create Account</h1>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Join Smart Campus
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min 6 characters" required minLength={6} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
