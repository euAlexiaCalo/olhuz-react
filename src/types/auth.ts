// Define o formato de dados que vamos enviar e receber ad API

// Dados de cadastro
export interface RegisterData {
    Nome: string;
    CPF: string;
    DataNascimento: string;
    Email: string;
    Senha: string;
}

// Dados de login
export interface LoginData {
    Email: string;
    Senha: string;
}

export interface AuthResponse {
    token: string;
    usuario: {
        id: number;
        Nome: string;
        Email: string;
    }
}