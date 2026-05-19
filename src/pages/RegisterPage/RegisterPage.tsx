import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { authService } from '../../services/authService';
import { useNavigate, Link } from 'react-router-dom';

import { LuCheck } from "react-icons/lu";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import LabelInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./RegisterPage.css";

function RegisterPage() {
  // Declaração de todos os estados necessários para o formulário
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados de controle da aplicação
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Função que salva os números do CPF no estado
  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const apenasNumeros = event.target.value.replace(/\D/g, "");
    setCpf(apenasNumeros.substring(0, 11));
  };

  // Formatar o CPF na hora de exibir
  const formatarCpfParaExibicao = (valor: string) => {
  const v = valor.replace(/\D/g, "");
  
  if (v.length > 9) {
    return v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  }
  if (v.length > 6) {
    return v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  }
  if (v.length > 3) {
    return v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }
  return v;
};

  // Função que salva os números do telefone no estado
  const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const apenasNumeros = event.target.value.replace(/\D/g, "");
    setTelephone(apenasNumeros.substring(0, 11));
  };

  // Formatar o telefone na hora de exibir
  const formatarTelephoneParaExibicao = (valor: string) => {
  const v = valor.replace(/\D/g, "");

  if (v.length === 11) {
    // Formato Celular: (XX) 99999-9999
    return v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (v.length > 2) {
    // Formato Fixo (ou enquanto digita): (XX) 3333-4444
    return v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (v.length > 0) {
    // Enquanto digita o DDD: (XX
    return v.replace(/(\d{0,2})/, "($1");
  }
  return v;
};

  // Função que gerencia o envio dos dados para a API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Envia os dados estruturados para o seu serviço de autenticação
      await authService.register({
        Nome: name,
        CPF: cpf,
        DataNascimento: birthdate,
        Telefone: telephone,
        Email: email,
        Senha: password
      });

      alert('Cadastro realizado com sucesso! Faça seu login.');
      navigate('/login'); // Redireciona o usuário para a página de login

    } catch (err) {
      // Converte o erro para o formato do Axios de forma segura
      const error = err as AxiosError<{ message: string }>;

      const apiErrorMessage = error.response?.data?.message;
      setError(apiErrorMessage || 'Erro ao realizar o cadastro. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-container">
        <div className="register-content">
          <div>
            <h1>Crie sua conta gratuita</h1>
            <p>Explore os principais recursos do Olhuz</p>
          </div>
          <details>
            <summary className="register-summary">Veja o que está incluido</summary>
            <ul className="register-resources-list">
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Leitura de Telas e Contexto Digital</strong>
                </div>
                <p>
                  Entenda interfaces complexas em segundos. Autonomia completa
                  para sua navegação.
                </p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Descrição Inteligente de Imagens</strong>
                </div>
                <p>
                  Converta o visual em áudio detalhado com IA. Comece agora no
                  plano gratuito.
                </p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>IA de Reconhecimento Visual</strong>
                </div>
                <p>Descrições precisas de cenas e ambientes em tempo real.</p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Configurações de Voz e Narrativa</strong>
                </div>
                <p>
                  Escolha a velocidade e o tom da narração que preferir. Seu
                  Olhuz, do seu jeito.
                </p>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="register-container">
        <div className="register-content">
          <h1>Cadastre-se no Olhuz</h1>
          <form onSubmit={handleSubmit} className="register-form">
            {error && <div className="error-message-box" style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
            <div className="register-inputs">
              <div>
                <LabelInput
                  label="Nome Completo"
                  type="text"
                  placeholder="Digite seu nome completo"
                  id="name"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="CPF"
                  type="text"
                  placeholder="Digite seu CPF"
                  id="cpf"
                  value={formatarCpfParaExibicao(cpf)}
                  onChange={handleCpfChange}
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Data de Nascimento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                  id="birthdate"
                  value={birthdate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBirthdate(e.target.value)}
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Telefone"
                  type="tel"
                  format="(##) #####-####"
                  placeholder="Digite seu telefone"
                  id="telephone"
                  value={formatarTelephoneParaExibicao(telephone)}
                  onChange={handleTelephoneChange}
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Email"
                  type="email"
                  placeholder="email@email.com"
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
                <p>A senha deve ter no mínimo 8 caracteres, incluindo um número, uma letra maiúscula e uma letra minúscula.</p>
              </div>
            </div>
            <Button
              text={loading ? "Cadastrando..." : "Cadastrar"}
              type="submit"
              color="#ffffff"
              bgColor="#1E3C88"
            ></Button>
          </form>
          <div className="alternative-register">
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
            <p style={{ marginTop: '15px' }}>
              Já tem uma conta? <Link to="/login" style={{ color: '#1E3C88', fontWeight: 'bold' }}>Faça Login</Link>
            </p>
            <p>Ao criar uma conta, você concorda com os <a href="">Termos de Serviço</a>. Para mais informações sobre as práticas de privacidade do Olhuz, consulte a <a href="">Declaração de Privacidade do Olhuz</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;