import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ImgOlhoPc from "../../assets/olhoPc.png";
import ImgHardware from "../../assets/equipamentosHardware.png";
import { team } from "../../data/team";
import MemberCard from "./components/Member/Member";
import "./AboutPage.css";
function AboutPage() {
    return (
        <div>
            <Navbar />
            <main className="about-container">
                <div className="about-history">
                    <div>
                        <div>
                            <h1>Nossa História</h1>
                            <p>A Olhuz nasceu em 2025, dentro do curso de Desenvolvimento de Sistemas do Senac, onde seis desenvolvedores e entusiastas da tecnologia se uniram com um propósito comum: transformar tecnologia em liberdade. O que começou como um projeto acadêmico movido pela paixão rapidamente evoluiu para um compromisso real com a inclusão.</p>
                        </div>
                        <img src={ImgOlhoPc} alt="Imagem do Olho do PC" />
                    </div>
                </div>
                <div className="container about-founders">
                    <h2>Nossos Fundadores</h2>
                    <div>
                        {team.map((member) => (
                            <MemberCard
                                key={member.id}
                                name={member.name}
                                position={member.position}
                                photo={member.photo}
                                alt={member.alt}
                                github={member.github}
                                linkedin={member.linkedin}
                            />
                        ))}
                    </div>
                </div>
                <div className="about-mission">
                    <div>
                        <h2>Nossa Missão</h2>
                        <p>Estamos aqui para criar um mundo digital acessível para todos. Acreditamos que a tecnologia deve ser uma ponte, não uma barreira, e estamos dedicados a desenvolver soluções que empoderem pessoas com deficiência visual a navegar, explorar e interagir com o mundo digital de forma independente.</p>
                    </div>
                    <p><em>"Transformar tecnologia em liberdade"</em></p>
                </div>
                <div className="about-innovation">
                    <img src={ImgHardware} alt="Imagem de Equipamentos de Hardware" />
                    <div>
                        <h2>Inovação com Propósito</h2>
                        <p>Nossa equipe trabalha incansavelmente para manter o Olhuz no topo da inovação. Cada linha de código é escrita pensando na experiência real do usuário, garantindo que a tecnologia de IA seja, acima de tudo, humana e empática.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;