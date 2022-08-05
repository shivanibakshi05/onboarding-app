import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Setup.css';
import person from '../assets/person.png';
import team from '../assets/team.png';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/Card';

function Setup() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState('');

  const handleClick = () => {
    navigate('/success');
  };

  return (
    <div className="setup-container">
      <Header />
      <div className="main">
        <h3 className="title">How are you planning to use Eden?</h3>
        <span className="subtitle">
          We'll streamline your setup experience accordingly.
        </span>
        <div className="cards">
          <Card
            icon={person}
            card="person"
            title="For myself"
            subtitle="Write better. Think more clearly. Stay organized."
            isSelected={isSelected}
            onClick={() => setIsSelected('person')}
          />
          <Card
            icon={team}
            card="team"
            title="With my team"
            subtitle="Wikis, docs, tasks & projects, all in one place."
            isSelected={isSelected}
            onClick={() => setIsSelected('team')}
          />
        </div>
        <Button
          text="Create Workspace"
          onClick={handleClick}
          disabled={!isSelected}
        />
      </div>
    </div>
  );
}

export default Setup;
