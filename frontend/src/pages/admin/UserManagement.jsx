import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiTrash2, FiSearch } from 'react-icons/fi';
import userService from '../../services/userService';

const ROLES = ['USER', 'ADMIN', 'TECHNICIAN', 'MANAGER'];

const ROLE_BADGE = {
    ADMIN: 'badge-danger',
    MANAGER: 'badge-warning',
    TECHNICIAN: 'badge-primary',
    USER: 'badge-muted',
};

const AVATAR_COLORS = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const getAvatarColor = (name) => {
    const index = (name || '').charCodeAt(0) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
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
            const { data } = await userService.getAll();
            setUsers(data.data || []);
        } catch (error) {
            toast.error('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId, newRole) => {
        try {
            await userService.updateRole(userId, newRole);
            setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
            toast.success(`Role updated to ${newRole}`);
        } catch (error) {
            toast.error('Failed to update role');
            fetchUsers();
        }
    };

    const handleDelete = async (userId, userName) => {
        if (!window.confirm(`Are you sure you want to delete ${userName}?`)) return;
        try {
            await userService.delete(userId);
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
        return (
            <div style={{ padding: '3rem', textAlign: 'center' }}>
                <div className="skeleton" style={{ width: '200px', height: '20px', margin: '0 auto 1rem' }} />
                <div className="skeleton" style={{ width: '500px', height: '40px', margin: '0 auto 0.5rem' }} />
                <div className="skeleton" style={{ width: '500px', height: '40px', margin: '0 auto 0.5rem' }} />
                <div className="skeleton" style={{ width: '500px', height: '40px', margin: '0 auto' }} />
            </div>
        );
    }

    return (
        <div className="animate-in">
            <div className="page-header">
                <div>
                    <h1>User Management</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                        {users.length} registered {users.length === 1 ? 'user' : 'users'}
                    </p>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                    <FiSearch style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-placeholder)', fontSize: '0.875rem' }} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            paddingLeft: '2.5rem', width: '100%', padding: '0.6rem 0.875rem 0.6rem 2.5rem',
                            border: '1.5px solid var(--border)', borderRadius: 'var(--radius)',
                            fontSize: '0.8125rem', fontFamily: 'inherit', background: 'var(--bg-card)',
                            transition: 'var(--transition)',
                        }}
                    />
                </div>
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    style={{
                        padding: '0.6rem 1rem', borderRadius: 'var(--radius)',
                        border: '1.5px solid var(--border)', background: 'var(--bg-card)',
                        color: 'var(--text)', fontSize: '0.8125rem', fontFamily: 'inherit',
                        cursor: 'pointer',
                    }}
                >
                    <option value="ALL">All Roles</option>
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
            </div>

            {/* Users Table */}
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th style={{ textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div
                                            className="avatar avatar-md"
                                            style={{ background: getAvatarColor(user.firstName) }}
                                        >
                                            {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                                        </div>
                                        <span style={{ fontWeight: 600, color: 'var(--text)' }}>
                                            {user.firstName} {user.lastName}
                                        </span>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        className={`badge ${ROLE_BADGE[user.role] || 'badge-muted'}`}
                                        style={{
                                            border: 'none', cursor: 'pointer',
                                            padding: '0.25rem 0.5rem', fontSize: '0.6875rem',
                                            fontWeight: 700, borderRadius: 'var(--radius-full)',
                                        }}
                                    >
                                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => handleDelete(user.id, `${user.firstName} ${user.lastName}`)}
                                        title="Delete user"
                                        className="btn btn-ghost"
                                        style={{ color: 'var(--danger)', fontSize: '1rem' }}
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredUsers.length === 0 && (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h3>No users found</h3>
                        <p>Try adjusting your search or filter</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserManagement;
