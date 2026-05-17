import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { IoIosSearch } from "react-icons/io";
import { faqCategories } from "../../data/faqCategories";
import ItemCategory from "./components/ItemCategory/ItemCategory";
import { faqQuestions } from "../../data/faqQuestions";
import ItemFaq from "./components/ItemFaq/ItemFaq";
import { MdSupportAgent } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import "./FaqPage.css";

function FaqPage() {
    return (
        <>
            <Navbar />
            <main className="faq-container">
                <section className="faq-hero">
                    <div>
                        <h1>Como podemos ajudar você hoje?</h1>
                        <p>Encontre respostas rápidas sobre o funcionamento, instalação e acessibilidade do Olhuz.</p>
                        <Input
                            id="search"
                            type="search"
                            placeholder="Digite sua dúvida... (Ex: Como ativar no Chrome?)"
                        >
                            <IoIosSearch />
                        </Input>
                    </div>
                </section>
                <section className="faq-categories">
                    <div>
                        {faqCategories.map((category) => (
                            <ItemCategory
                                key={category.id}
                                icon={category.icon}
                                title={category.title}
                                description={category.description}
                            />
                        ))}
                    </div>
                </section>
                <section className="faq-questions">
                    <div>
                        <h2>Dúvidas mais comuns</h2>
                        {faqQuestions.map((question) => (
                            <ItemFaq
                                key={question.id}
                                question={question.question}
                                answer={question.answer}
                            />
                        ))}
                    </div>
                </section>
                <section className="faq-support">
                    <div>
                        <MdSupportAgent />
                        <h2>Ainda tem dúvidas ou encontrou algum problema técnico?</h2>
                        <Button
                            text="Falar com o Suporte"
                            type="button"
                            onClick={() => { }}
                            color="#ffffff"
                            bgColor="#00a8e8"
                        >
                            <LuMessageSquareText />
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default FaqPage;