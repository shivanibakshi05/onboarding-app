import React from 'react';
import '../styles/components/Input.css';

function Input({ labelText, placeholder, type, value, onChange }) {
  return (
    <div
      className={`${
        type === 'url' ? 'input-container-url' : 'input-container'
      }`}
    >
      <label className={`${type === 'url' ? 'label-url' : 'label'}`}>
        {labelText}
      </label>
      {type === 'url' ? (
        <label className="label-data" data-domain="www.eden.com/">
          <input
            className="input-url"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      ) : (
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;
