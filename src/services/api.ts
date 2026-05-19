// Arquivo para configurar as requisições HTTP
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7039',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Adiciona o token JWT em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@App:token');

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;