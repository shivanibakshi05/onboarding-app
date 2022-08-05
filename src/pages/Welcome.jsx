import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Welcome.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Header from '../components/Header';

function Welcome() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleClick = () => {
    navigate('/workspace');
  };

  return (
    <div className="welcome-container">
      <Header />
      <div className="main">
        <h3 className="title">Welcome! First things first...</h3>
        <h5 className="subtitle">You can always change them later.</h5>
        <Input
          labelText="Full Name"
          placeholder="Steve Jobs"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          labelText="Display Name"
          placeholder="Steve"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Button
          text="Create Workspace"
          onClick={handleClick}
          disabled={!fullName || !displayName}
        />
      </div>
    </div>
  );
}

export default Welcome;
