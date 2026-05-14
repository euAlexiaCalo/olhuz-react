import { LuCheck } from "react-icons/lu";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import LabelInput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./RegisterPage.css";

function RegisterPage() {
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
          <form action="/register" method="POST" className="register-form">
            <div className="register-inputs">
              <div>
                <LabelInput
                  label="Nome Completo"
                  type="text"
                  placeholder="Digite seu nome completo"
                  id="name"
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Email"
                  type="email"
                  placeholder="email@email.com"
                  id="email"
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  id="password"
                  required
                >
                  <AiOutlineEye className="icon-eye" />
                </LabelInput>
                <p>A senha deve ter no mínimo 8 caracteres, incluindo um número, uma letra maiúscula e uma letra minúscula.</p>
              </div>
              <div>
                <LabelInput
                  label="CPF"
                  type="text"
                  placeholder="Digite seu CPF"
                  id="cpf"
                  required
                />
              </div>
              <div>
                <LabelInput
                  label="Data de Nascimento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                  id="birthdate"
                  required
                />
              </div>
            </div>
            <Button
                text="Entrar"
                type="button"
                onClick={() => {}}
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
                onClick={() => {}}
                color="#000000"
                bgColor="#ffffff"
                borderColor="#EBEBEB"
              >
                <FcGoogle className="icon-google" />
              </Button>
              <p>Ao criar uma conta, você concorda com os <a href="">Termos de Serviço</a>. Para mais informações sobre as práticas de privacidade do Olhuz, consulte a <a href="">Declaração de Privacidade do Olhuz</a>.</p>
            </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;