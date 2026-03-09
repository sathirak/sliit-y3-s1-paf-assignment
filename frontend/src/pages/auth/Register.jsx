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
        <div className="auth-container">
            <div className="auth-card">
                <h1>Create Account</h1>
                <p className="auth-subtitle">Join Smart Campus Operations Hub</p>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min 6 characters" required minLength={6} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
