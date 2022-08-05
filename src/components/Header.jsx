import React from 'react';
import '../styles/components/Header.css';
import logo from '../assets/logo.png';
import Stepper from '../components/Stepper';

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <span className="heading">Eden</span>
      </div>
      <Stepper />
    </>
  );
}

export default Header;
