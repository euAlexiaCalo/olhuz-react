import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute: React.FC = () => {
  const { signed, loading } = useAuth();

  // Enquanto estiver lendo o localStorage, exibe uma tela de carregamento
  if (loading) {
    return <div>Carregando...</div>; 
  }

  // Se estiver logado, renderiza a rota filha (Outlet). Se não, joga pro login.
  return signed ? <Outlet /> : <Navigate to="/login" replace />;
};