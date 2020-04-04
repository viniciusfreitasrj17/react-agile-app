import React from 'react';
import './App.css';
import NavBar from './ui/NavBar'

function App({ children }) {
  const logo = 'DevDeck101';

  return (
    <div className="container">
      <NavBar logo={logo} />
      {children}
    </div>
  );
}

export default App;
