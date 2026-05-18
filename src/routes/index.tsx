import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/HomePage/HomePage'
import About from '../pages/AboutPage/AboutPage'
import Functionalities from '../pages/FunctionalitiesPage/FunctionalitiesPage'
import Faq from '../pages/FaqPage/FaqPage'
import Login from '../pages/LoginPage/LoginPage'
import Register from '../pages/RegisterPage/RegisterPage'
import Account  from '../pages/AccountPage/AccountPage';

import { PrivateRoute } from './PrivateRoute';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/funcionalidades" element={<Functionalities />} />
        <Route path="/duvidas-frequentes" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        {/* Rotas Privadas (Protegidas) */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Account />} />
        </Route>

        {/* Rota de Redirecionamento Padrão (Caso a rota não exista) */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
    
  );
};