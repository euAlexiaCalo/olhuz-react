import React from 'react';
import './Toggle.css';

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ id, checked, onChange, disabled = false }) => {
  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="toggle-checkbox"
      />
      <label htmlFor={id} className="toggle-label">
        <span className="toggle-inner-circle" />
      </label>
    </div>
  );
};