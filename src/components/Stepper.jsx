import React from 'react';
import '../styles/components/Stepper.css';

function Stepper() {
  const urlPath = window.location.pathname;

  const checkUrlPath = (path) => {
    return urlPath.includes(path);
  };

  const isWorkspaceActive = () => {
    return (
      checkUrlPath('workspace') ||
      checkUrlPath('setup') ||
      checkUrlPath('success')
    );
  };

  const isSetupActive = () => {
    return checkUrlPath('setup') || checkUrlPath('success');
  };

  const isSuccessActive = () => {
    return checkUrlPath('success');
  };

  return (
    <ul className="stepper">
      <li className={`stepper-item active`}>
        <span className={`stepper-title active`}>1</span>
      </li>
      <li className={`stepper-item ${isWorkspaceActive() ? ' active' : ''}`}>
        {isWorkspaceActive() && <hr className="line" />}
        <span
          className={`stepper-title ${isWorkspaceActive() ? ' active' : ''}`}
        >
          2
        </span>
      </li>
      <li className={`stepper-item ${isSetupActive() ? ' active' : ''}`}>
        {isSetupActive() && <hr className="line" />}
        <span className={`stepper-title ${isSetupActive() ? ' active' : ''}`}>
          3
        </span>
      </li>
      <li className={`stepper-item ${isSuccessActive() ? ' active' : ''}`}>
        {isSuccessActive() && <hr className="line" />}
        <span className={`stepper-title ${isSuccessActive() ? ' active' : ''}`}>
          4
        </span>
      </li>
    </ul>
  );
}

export default Stepper;
