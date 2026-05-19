import './Input.css';
import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  format?: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children?: React.ReactNode;
}

function Input({ label, type, format, placeholder, id, value, onChange, required = false, children }: CustomInputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input
          type={type}
          {...{ format }}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange} />
        {children}
      </div>
    </div>
  );
}

export default Input;