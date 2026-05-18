import "./ButtonPill.css";
interface ButtonPillProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
    icon?: React.ReactNode;
}

export default function ButtonPill({ label, isActive, onClick, className, icon }: ButtonPillProps) {
    return (
        <button
            onClick={onClick}
            className={`btn-pill ${className || ''}
        ${isActive
                    ? 'active'
                    : ''
                }
      `}
        >
            {icon}
            {label}
        </button>
    );
}