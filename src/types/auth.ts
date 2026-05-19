// Define o formato de dados que vamos enviar e receber ad API

// Dados de cadastro
export interface RegisterData {
    Nome: string;
    CPF: string;
    DataNascimento: string;
    Telefone: string;
    Email: string;
    Senha: string;
}

// Dados de login
export interface LoginData {
    Email: string;
    Senha: string;
}

export interface AuthResponse {
    erro: boolean;
    message: string;
    token: string;
    usuario: {
        Id: number;
        Nome: string;
        Email: string;
    }
}