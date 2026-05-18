// Funções para chamar os endpoints de login e cadastro
import api from './api';
import type { LoginData, RegisterData, AuthResponse } from '../types/auth';

export const authService = {
    login: async (data: LoginData): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/api/login', data);
        return response.data;
    },
    register: async (data: RegisterData): Promise<void> => {
        await api.post('/api/criarconta', data);
    }
};