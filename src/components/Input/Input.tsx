import './Input.css';

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children?: React.ReactNode;
}

function Input({ label, type, placeholder, id, value, onChange, required = false, children }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input type={type} id={id} placeholder={placeholder} required={required} value={value} onChange={onChange} />
        {children}
      </div>
    </div>
  );
}

export default Input;