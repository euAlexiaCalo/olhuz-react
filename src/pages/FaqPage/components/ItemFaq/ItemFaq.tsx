import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import "./ItemFaq.css";

interface ItemFaqProps {
    question: string;
    answer: string;
}

export default function ItemFaq({ question, answer }: ItemFaqProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`faq-item ${isOpen ? "active" : ""}`}>
            <div className="faq-question" onClick={toggleFaq}>
                <h3>{question}</h3>
                <span className="faq-icon" aria-hidden="true">
                    {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                </span>
            </div>


            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}