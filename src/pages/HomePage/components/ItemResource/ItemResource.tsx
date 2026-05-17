import "./ItemResource.css";
interface ItemResourceProps {
    title: string;
    description: string;
    Icon: React.ComponentType;
}

export default function ItemResource({ title, description, Icon }: ItemResourceProps) {
    return (
        <li className="home-resources-item">
            <div className="home-resources-icons">
                <Icon />
            </div>
            <div className="home-resources-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}