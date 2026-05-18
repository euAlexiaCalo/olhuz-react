import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PublicRoute: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>;
    }

    // SE ESTIVER LOGADO: Não deixa ver Login/Registro e joga para a página interna
    if (signed) {
        return <Navigate to="/minha-conta" replace />;
    }

    // SE NÃO ESTIVER LOGADO: Renderiza a página normalmente (Login ou Registro)
    return <Outlet />;
};