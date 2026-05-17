import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ImgCell from "../../assets/celularOlhuz.jpg";
import { resources } from "../../data/resources";
import ItemResource from "./components/ItemResource/ItemResource";
import { feedbacks } from "../../data/feedbacks";
import ItemFeedback from "./components/ItemFeedbacks/ItemFeedback";
import { RiVolumeUpLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import "./HomePage.css";

function HomePage() {
    return (
        <>
            <Navbar />
            <main className="home-container">
                <section className="home-hero">
                    <div>
                        <h1>Sinta o mundo digital através das palavras.</h1>
                        <p>Muito além de um leitor de telas. O Olhuz reconhece, analisa e descreve cada detalhe visual, devolvendo a você a independência na navegação.</p>
                        <div>
                            <Button
                                text="Experimente grátis"
                                type="button"
                                onClick={() => {}}
                                color="#ffffff"
                                bgColor="#1A3672"
                            />
                            <p>Disponível iOS / Android</p>
                        </div>
                    </div>
                    <img src={ImgCell} alt="Imagem de um celular com o Olhuz" className="home-image" />
                </section>
                <section className="home-why">
                    <h2>Por que os leitores de tela tradicionais não são suficientes?</h2>
                    <div>
                        <div>
                            <RiVolumeUpLine className="volume-icon" />
                            <h3>Leitores Atuais</h3>
                            <p>Fornecem descrições robóticas e genéricas como "Pessoa sentada". Eles ignoram o calor do momento e a complexidade visual do ambiente ao seu redor.</p>
                        </div>
                        <div>
                            <IoMdEye className="eye-icon" />
                            <h3>Olhuz IA</h3>
                            <p>"Seus três melhores amigos estão sorrindo em volta de um bolo de aniversário iluminado por velas, em uma sala com luz quente e acolhedora." Compreenda a emoção.</p>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="home-resources">
                    <h2>Tecnologia que Transforma Visão em Contexto.</h2>
                    <ul>
                        {resources.map((resource) => (
                            <ItemResource
                            key={resource.id}
                            title={resource.title}
                            description={resource.description}
                            Icon={resource.icon}
                            />
                            ))}
                    </ul>
                </section>
                <section className="home-feedbacks">
                    <h2>Vozes de Quem Conquistou Autonomia</h2>
                    <div>
                        {feedbacks.map((feedback) => (
                            <ItemFeedback
                            key={feedback.id}
                            name={feedback.name}
                            message={feedback.message}
                            photo={feedback.photo}
                            alt={feedback.alt}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default HomePage;