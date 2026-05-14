import "./Button.css";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
  children?: React.ReactNode;
}

function Button({ text, type = "button", onClick,color, bgColor, className, children, borderColor }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className || ""}`}
      style={{ color: color, backgroundColor: bgColor, border: borderColor ? `1px solid ${borderColor}` : "none" }}
    >
      {children}
      {text}
    </button>
  );
}

export default Button;
