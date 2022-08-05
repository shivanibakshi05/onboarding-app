import React from 'react';
import '../styles/components/Button.css';

function Button({ text, onClick, disabled }) {
  return (
    <button
      className={`btn ${disabled ? 'disabled' : ''}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
