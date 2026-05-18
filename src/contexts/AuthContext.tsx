import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Tipagem do usuário
export interface User {
  id: string;
  name: string;
  email: string;
}

// Tipagem do que o Contexto vai exportar
export interface AuthContextData {
  signed: boolean;
  user: User | null;
  login(token: string, user: User): void;
  logout(): void;
  loading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser && storagedToken) {
      try {
        return JSON.parse(storagedUser);
      } catch (error) {
        console.error('Erro ao ler o usuário do localStorage:', error);
        return null;
      }
    }
    return null;
  });

  const [loading] = useState(false);

  const login = (token: string, loggedUser: User) => {
    setUser(loggedUser);
    localStorage.setItem('@App:token', token);
    localStorage.setItem('@App:user', JSON.stringify(loggedUser));
  };

  const logout = () => {
    localStorage.removeItem('@App:token');
    localStorage.removeItem('@App:user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};