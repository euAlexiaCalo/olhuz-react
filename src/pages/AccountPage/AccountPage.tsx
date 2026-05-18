import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import ButtonPill from "../../components/ButtonPill/ButtonPill";
import Input from "../../components/Input/Input";
import { Toggle } from "../../components/Toggle/Toggle";
// Ícones
import { MdOutlineSettingsVoice } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { LuShield, LuSun, LuMoon } from "react-icons/lu";
import { IoVolumeHighOutline } from "react-icons/io5";
import { MdOutlineSensors } from "react-icons/md";
import { MdOutlinePalette } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiAlertLine } from "react-icons/ri";
import "./AccountPage.css";

function AccountPage() {
    // Estados para controlar as seleções
    const [velocidade, setVelocidade] = useState<string>("1.0x");
    const [tipoVoz, setTipoVoz] = useState<string>("Feminina");
    const [modoExibicao, setModoExibicao] = useState<string>("Modo Claro");

    // Estados para controlar os switches
    const [sonsDeAlerta, setSonsDeAlerta] = useState<boolean>(true);
    const [vibracao, setVibracao] = useState<boolean>(false);

    // Opções disponíveis para renderização dinâmica
    const opcoesVelocidade = ["0.5x", "1.0x", "1.5x", "2.0x"];
    const opcoesVoz = ["Masculina", "Feminina"];

    // Configuração dos modos de exibição com seus ícones
    const opcoesModoExibicao = [
        { label: "Modo Claro", icon: <LuSun /> },
        { label: "Modo Escuro", icon: <LuMoon /> }
    ];

    const { logout } = useAuth();

    return (
        <>
            <Navbar />
            <main className="account-container">
                <nav className="account-nav">
                    <div>
                        <h2>Olá, João</h2>
                        <ul className="account-nav-list">
                            <li>
                                <MdOutlineSettingsVoice />
                                <a href="#configuracoes-voz">Configurações de Voz</a>
                            </li>
                            <li>
                                <FaRegUser />
                                <a href="#dados-pessoais">Dados Pessoais</a>
                            </li>
                            <li>
                                <LuShield />
                                <a href="#seguranca-conta">Segurança da Conta</a>
                            </li>
                        </ul>
                    </div>
                    <Button
                        text="Sair da Conta"
                        onClick={logout}
                        color="#8d2a2a"
                        bgColor="white"
                        borderColor="#8d2a2a"
                    />
                </nav>
                <div>
                    <section className="account-settings" id="configuracoes-voz">
                        <div className="account-section-header">
                            <h2>Personalize a sua experiência</h2>
                            <p>Ajuste o comportamento da nossa Inteligência Artificial para o seu dia a dia.</p>
                        </div>
                        <div>
                            <div className="account-settings-item">
                                <div>
                                    <IoVolumeHighOutline />
                                    <h3>Preferências de Áudio</h3>
                                </div>
                                <div className="account-settings-voice-preferences">
                                    <div>
                                        <h4>Velocidade da Fala</h4>
                                        <div>
                                            {opcoesVelocidade.map((vel) => (
                                                <ButtonPill
                                                    key={vel}
                                                    label={vel}
                                                    isActive={velocidade === vel}
                                                    onClick={() => setVelocidade(vel)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Tipo de Voz</h4>
                                        <div>
                                            {opcoesVoz.map((voz) => (
                                                <ButtonPill
                                                    key={voz}
                                                    label={voz}
                                                    isActive={tipoVoz === voz}
                                                    onClick={() => setTipoVoz(voz)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    text="Ouvir Exemplo"
                                    color="white"
                                    bgColor="#002b5b"
                                    borderColor="none"
                                    children={<IoPlayCircleOutline />}
                                />

                            </div>
                            <div>
                                <div className="account-settings-item">
                                    <div>
                                        <MdOutlineSensors />
                                        <h3>Notificações e Sensores</h3>
                                    </div>
                                    <div className="account-settings-sensors">
                                        <div>
                                            <p>Sons de Alerta</p>
                                            <Toggle
                                                id="toggle-sons"
                                                checked={sonsDeAlerta}
                                                onChange={setSonsDeAlerta}
                                            />
                                        </div>
                                        <div>
                                            <p>Vibração (Mobile/Acessórios)</p>
                                            <Toggle
                                                id="toggle-vibracao"
                                                checked={vibracao}
                                                onChange={setVibracao}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="account-settings-theme account-settings-item">
                                    <div>
                                        <MdOutlinePalette />
                                        <h3>Aparência</h3>
                                    </div>
                                    <div className="account-settings-themes">
                                        {opcoesModoExibicao.map((modo) => (
                                            <ButtonPill
                                                key={modo.label}
                                                label={modo.label}
                                                icon={modo.icon}
                                                isActive={modoExibicao === modo.label}
                                                onClick={() => setModoExibicao(modo.label)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="account-data" id="dados-pessoais">
                        <div className="account-section-header">
                            <h2>Meus Dados</h2>
                            <p>Confira os seus dados pessoais e atualize-os.</p>
                        </div>
                        <div className="account-data-form">
                            <div>
                                <Input
                                    type="text"
                                    label="Nome Completo"
                                    placeholder="dados do banco"
                                    id="name"
                                />
                                <Input
                                    type="date"
                                    label="Data de Nascimento"
                                    placeholder="dados do banco"
                                    id="birthdate"
                                />
                                <Button
                                    text="Salvar Dados"
                                    color="#181818"
                                    bgColor="#dddddd"
                                    borderColor="none"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    label="E-mail"
                                    placeholder="dados do banco"
                                    id="email"
                                />
                                <Input
                                    type="text"
                                    label="CPF"
                                    placeholder="dados do banco"
                                    id="cpf"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="account-security" id="seguranca-conta">
                        <div className="account-section-header">
                            <h2>Segurança da Conta</h2>
                        </div>
                        <div>
                            <div className="account-security-password">
                                <div>
                                    <BsKey />
                                    <h3>Alterar Senha</h3>
                                </div>
                                <div>
                                    <Input
                                        type="password"
                                        label="Senha Atual"
                                        placeholder="Digite sua senha atual"
                                        id="password"
                                    />
                                    <Input
                                        type="password"
                                        label="Nova Senha"
                                        placeholder="Mínimo de 8 caracteres"
                                        id="confirmPassword"
                                    />
                                    <Input
                                        type="password"
                                        label="Confirmar Nova Senha"
                                        placeholder=""
                                        id="confirmPassword"
                                    />
                                </div>
                                <Button
                                    text="Atualizar Senha"
                                    color="#002b5b"
                                    bgColor="white"
                                    borderColor="#002b5b"
                                />
                            </div>
                            <div className="account-security-delete">
                                <div>
                                    <div>
                                        <RiAlertLine />
                                        <h3>Excluir Conta Permanentemente</h3>
                                    </div>
                                    <p>Atenção: Ao excluir sua conta, todos os seus dados de personalização de IA, histórico de análises e configurações de dispositivos serão removidos definitivamente. Esta ação não pode ser desfeita.</p>
                                </div>
                                <Button
                                    text="Excluir Minha Conta"
                                    color="white"
                                    bgColor="#a11818"
                                    borderColor="none"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default AccountPage