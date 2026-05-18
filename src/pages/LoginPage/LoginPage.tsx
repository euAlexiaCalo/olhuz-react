import React, { useState } from 'react';
import { authService } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import LabelInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LogoOlhuz from "../../assets/logoOlhuz.png";
import "./LoginPage.css";
function LoginPage() {
  // Estados para armazenar os dados do formulário e erros
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hooks para autenticação global e navegação
  const { login } = useAuth();
  const navigate = useNavigate();

  // Função executada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue
    setError('');       // Limpa erros anteriores
    setLoading(true);   // Ativa estado de carregamento se desejar usar no botão

    try {
      // Chama o serviço passando as credenciais digitadas
      const response = await authService.login({
        Email: email,
        Senha: password
      });

      // Salva os dados no estado global (Contexto) e localStorage
      login(response.token, {
        id: String(response.usuario.id), // Se o seu contexto esperar string, converta. Se esperar number, tire o String()
        name: response.usuario.Nome,
        email: response.usuario.Email
      });

      // Redireciona para o painel principal protegido
      navigate('/dashboard');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      const apiErrorMessage = error.response?.data?.message;
      setError(apiErrorMessage || 'Erro ao acessar a conta. Verifique seu e-mail e senha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <Link to="/">
        <img src={LogoOlhuz} alt="Logo Olhuz" className="login-logo" />
      </Link>
      <div className="container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Acesse sua conta Olhuz</h1>
          {error && <div className="error-message-box" style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
          <div>
            <LabelInput
              label="Email"
              type="email"
              placeholder="Digite seu email"
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <LabelInput
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            >
              <AiOutlineEye className="icon-eye" />
            </LabelInput>
            <a href="/forgot-password">Esqueceu sua senha?</a>
          </div>
          <div className="login-container-buttons">
            <Button
              text={loading ? "Carregando..." : "Entrar"}
              type="submit"
              color="#ffffff"
              bgColor="#1A3672"
            />
            <div className="divider">
              <hr />
              <p>ou</p>
              <hr />
            </div>
            <Button
              text="Entrar com Google"
              type="button"
              onClick={() => { }}
              color="#000000"
              bgColor="#ffffff"
              borderColor="#EBEBEB"
            >
              <FcGoogle className="icon-google" />
            </Button>
          </div>
          <div>
            <p>Não tem uma conta?</p>
            <Link to="/cadastro">Crie sua conta Olhuz</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
