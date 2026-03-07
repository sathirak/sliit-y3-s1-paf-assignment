import API from './api';

const userService = {
    getAll: () => API.get('/users'),
    getById: (id) => API.get(`/users/${id}`),
    updateRole: (id, role) => API.put(`/users/${id}/role`, { role }),
    delete: (id) => API.delete(`/users/${id}`),
};

export default userService;
