import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/components/Container.css';

function Container({ routes }) {
  return (
    <div className="container">
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default Container;
