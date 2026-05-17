import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ImgIA from "../../assets/imgIA.png";
import { functionalities } from "../../data/functionalities";
import ImgFriends from "../../assets/imgFriends.jpg";
import ItemFunctionality from "./ItemFunctionalities/ItemFunctionality";
import { HiOutlinePlay } from "react-icons/hi2";
import { platforms } from "../../data/platforms";
import ItemPlatforms from "./ItemPlatforms/ItemPlatforms";
import "./FunctionalitiesPage.css";

function Functionalities() {
    return (
        <>
            <Navbar />
            <main className="functionalities-container">
                <section className="functionalities-hero">
                    <div>
                        <h1>Inteligência Artificial que traduz o mundo visual em liberdade.</h1>
                        <p>Esqueça as descrições genéricas. Descubra como a nossa tecnologia analisa contexto, lê dados complexos e interpreta sentimentos em tempo real.</p>
                        <Button
                            text="Experimente grátis"
                            type="button"
                            onClick={() => { }}
                            color="#000000"
                            bgColor="#fad02c"
                        />
                    </div>
                    <img src={ImgIA} alt="Ilustração abstrata e tecnológica sobre fundo branco, representando a Inteligência Artificial transformando elementos do mundo visual em ondas sonoras e dados digitais, simbolizando acessibilidade e liberdade." />
                </section>
                <section className="functionalities-simulator">
                    <div>
                        <h2>O Simulador Olhuz</h2>
                        <div>
                            <img src={ImgFriends} alt="Imagem de três amigos sorrindo e celebrando ao redor de uma mesa de madeira. No centro, há um bolo de aniversário de chocolate com velas acesas, criando uma atmosfera calorosa e festiva." />
                            <div className="functionalities-simulator-text">
                                <div>
                                    <h3>Como um leitor tradicional lê:</h3>
                                    <p>Imagem, Bolo de aniversário.</p>
                                </div>
                                <div>
                                    <div>
                                        <h3>Como o Olhuz interpreta:</h3>
                                        <p>Três amigos sorrindo e celebrando ao redor de uma mesa de madeira. No centro, há um bolo de aniversário de chocolate com velas acesas, criando uma atmosfera calorosa e festiva.</p>
                                    </div>
                                    <div>
                                        <HiOutlinePlay />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="functionalities-list">
                    <div>
                        {functionalities.map((functionality) => (
                            <ItemFunctionality
                                key={functionality.id}
                                icon={functionality.icon}
                                title={functionality.title}
                                description={functionality.description}
                            />
                        ))}
                    </div>
                </section>
                <section className="functionalities-platforms">
                    <div>
                        <h2>Onde você precisa, o Olhuz está lá.</h2>
                        <div>
                            {platforms.map((platform) => (
                                <ItemPlatforms
                                    key={platform.id}
                                    title={platform.title}
                                    subtitle={platform.subtitle}
                                    icon={platform.icon}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Functionalities;