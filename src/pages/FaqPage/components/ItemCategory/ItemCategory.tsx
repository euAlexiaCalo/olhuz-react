import "./ItemCategory.css";
interface ItemCategoryProps {
    icon: React.ComponentType;
    title: string;
    description: string;
}

export default function ItemCategory({ icon: Icon, title, description }: ItemCategoryProps) {
    return (
        <div className="faq-category-item">
            <div className="faq-category-icon">
                <Icon />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}