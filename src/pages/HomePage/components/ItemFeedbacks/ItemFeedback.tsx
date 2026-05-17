import "./ItemFeedback.css";
interface ItemFeedbackProps {
    message: string;
    name: string;
    photo: string;
    alt: string;
}

export default function ItemFeedback({ message, name, photo, alt }: ItemFeedbackProps) {
    return (
        <div className="feedback-card">
            <blockquote>
                <p><em>"{message}"</em></p>
            </blockquote>
            <div>
                <img src={photo} alt={alt} />
                <h3><cite>{name}</cite></h3>
            </div>
        </div>
    );
}