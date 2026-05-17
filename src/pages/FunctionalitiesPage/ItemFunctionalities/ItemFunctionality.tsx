import "./ItemFunctionality.css";

interface ItemFunctionalityProps {
    icon: React.ComponentType;
    title: string;
    description: string;
}

function ItemFunctionality({ icon: Icon, title, description }: ItemFunctionalityProps) {
    return (
        <div className="functionality-item">
            <div className="functionality-icon">
                <Icon />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ItemFunctionality;