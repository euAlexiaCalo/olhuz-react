import './Input.css';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  required?: boolean;
  children?: React.ReactNode;
}

function Input({ label, type, placeholder, id, required = false, children }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input type={type} id={id} placeholder={placeholder} required={required} />
        {children}
      </div>
    </div>
  );
}

export default Input;