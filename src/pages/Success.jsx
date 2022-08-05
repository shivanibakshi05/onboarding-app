import React from 'react';
import '../styles/pages/Success.css';
import success from '../assets/success.png';
import Header from '../components/Header';
import Button from '../components/Button';

function Success() {
  return (
    <div className="success-container">
      <Header />
      <div className="main">
        <img src={success} alt="success" />
        <h3 className="title">Congratulations, Eden!</h3>
        <h5 className="subtitle">
          You have completed onboarding, you can start using the Eden!
        </h5>
        <Button type="primary" text="Launch Beta" />
      </div>
    </div>
  );
}

export default Success;
