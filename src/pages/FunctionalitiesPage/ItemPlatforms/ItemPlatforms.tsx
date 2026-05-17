import "./ItemPlatforms.css";
interface ItemPlatformsProps {
    title: string;
    subtitle: string;
    icon: React.ComponentType;
}

function ItemPlatforms({ title, subtitle, icon: Icon }: ItemPlatformsProps) {
    return (
        <div className="platform-item">
            <div className="platform-icon">
                <Icon />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
}

export default ItemPlatforms;