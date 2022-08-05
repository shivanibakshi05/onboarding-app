import React from 'react';
import '../styles/components/Card.css';

function Card({ icon, card, title, subtitle, isSelected, onClick }) {
  return (
    <div
      className={`card-container ${isSelected === card ? ' active' : ''}`}
      onClick={onClick}
    >
      <img src={icon} alt="icon" height={22} width={22} />
      <span className="card-title">{title}</span>
      <span className="card-subtitle">{subtitle}</span>
    </div>
  );
}

export default Card;
