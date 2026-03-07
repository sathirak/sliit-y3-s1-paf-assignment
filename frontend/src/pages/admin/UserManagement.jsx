import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiTrash2, FiShield, FiSearch } from 'react-icons/fi';
import userService from '../../services/userService';

const ROLES = ['USER', 'ADMIN', 'TECHNICIAN', 'MANAGER'];

const ROLE_COLORS = {
    ADMIN: { bg: '#fee2e2', color: '#dc2626' },
    MANAGER: { bg: '#fef3c7', color: '#d97706' },
    TECHNICIAN: { bg: '#dbeafe', color: '#2563eb' },
    USER: { bg: '#f3f4f6', color: '#6b7280' },
};

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('ALL');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            // TODO: Uncomment when backend is ready
            // const { data } = await userService.getAll();
            // setUsers(data.data || data);

            // Demo data for development
            setUsers([
                { id: '1', firstName: 'Adeesha', lastName: 'Perera', email: 'adeesha@example.com', role: 'ADMIN', authProvider: 'LOCAL', createdAt: '2026-03-01' },
                { id: '2', firstName: 'Imasha', lastName: 'Silva', email: 'imasha@example.com', role: 'USER', authProvider: 'LOCAL', createdAt: '2026-03-02' },
                { id: '3', firstName: 'Lumini', lastName: 'Fernando', email: 'lumini@example.com', role: 'USER', authProvider: 'GOOGLE', createdAt: '2026-03-03' },
                { id: '4', firstName: 'Sathira', lastName: 'Kumara', email: 'sathira@example.com', role: 'TECHNICIAN', authProvider: 'LOCAL', createdAt: '2026-03-04' },
            ]);
        } catch (error) {
            toast.error('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId, newRole) => {
        try {
            // TODO: Uncomment when backend is ready
            // await userService.updateRole(userId, newRole);
            setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
            toast.success(`Role updated to ${newRole}`);
        } catch (error) {
            toast.error('Failed to update role');
        }
    };

    const handleDelete = async (userId, userName) => {
        if (!window.confirm(`Are you sure you want to delete ${userName}?`)) return;
        try {
            // TODO: Uncomment when backend is ready
            // await userService.delete(userId);
            setUsers(users.filter(u => u.id !== userId));
            toast.success('User deleted');
        } catch (error) {
            toast.error('Failed to delete user');
        }
    };

    const filteredUsers = users.filter(u => {
        const matchesSearch =
            `${u.firstName} ${u.lastName} ${u.email}`.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>Loading users...</div>;
    }

    return (
        <div>
            <div className="page-header">
                <h1>👥 User Management</h1>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{users.length} users total</span>
            </div>

            {/* Search & Filter Bar */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                    <FiSearch style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ paddingLeft: '2.25rem', width: '100%' }}
                    />
                </div>
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)' }}
                >
                    <option value="ALL">All Roles</option>
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
            </div>

            {/* Users Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>User</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Email</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Provider</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Role</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                {/* Name + Avatar */}
                                <td style={{ padding: '0.75rem 1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: 'var(--primary)', color: '#fff',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.8rem', fontWeight: 600,
                                        }}>
                                            {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                                        </div>
                                        <span style={{ fontWeight: 500 }}>{user.firstName} {user.lastName}</span>
                                    </div>
                                </td>

                                {/* Email */}
                                <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>{user.email}</td>

                                {/* Auth Provider */}
                                <td style={{ padding: '0.75rem 1rem' }}>
                                    <span style={{
                                        padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600,
                                        background: user.authProvider === 'GOOGLE' ? '#fef3c7' : '#f3f4f6',
                                        color: user.authProvider === 'GOOGLE' ? '#d97706' : '#6b7280',
                                    }}>
                                        {user.authProvider === 'GOOGLE' ? '🔵 Google' : '🔒 Local'}
                                    </span>
                                </td>

                                {/* Role Dropdown */}
                                <td style={{ padding: '0.75rem 1rem' }}>
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        style={{
                                            padding: '0.3rem 0.5rem',
                                            borderRadius: '6px',
                                            border: '1px solid var(--border)',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            background: ROLE_COLORS[user.role]?.bg || '#f3f4f6',
                                            color: ROLE_COLORS[user.role]?.color || '#6b7280',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </td>

                                {/* Actions */}
                                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                                    <button
                                        onClick={() => handleDelete(user.id, `${user.firstName} ${user.lastName}`)}
                                        title="Delete user"
                                        style={{
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            color: 'var(--danger)', fontSize: '1rem', padding: '0.25rem',
                                        }}
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredUsers.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                        No users found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserManagement;
