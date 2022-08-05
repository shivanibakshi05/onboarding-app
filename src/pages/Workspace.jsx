import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Workspace.css';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';

function Workspace() {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceURL, setWorkspaceURL] = useState('');

  const handleClick = () => {
    navigate('/setup');
  };

  return (
    <div className="workspace-container">
      <Header />
      <div className="main">
        <h3 className="title">Let's set up a home for all your work</h3>
        <h5 className="subtitle">
          You can always create another workspace later.
        </h5>
        <Input
          labelText="Workspace Name"
          placeholder="Steve Jobs"
          type="text"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
        <Input
          labelText={
            <span>
              Workspace URL<span>(optional)</span>
            </span>
          }
          placeholder="Steve"
          type="url"
          value={workspaceURL}
          onChange={(e) => setWorkspaceURL(e.target.value)}
        />
        <Button
          text="Create Workspace"
          onClick={handleClick}
          disabled={!workspaceName || !workspaceURL}
        />
      </div>
    </div>
  );
}

export default Workspace;
