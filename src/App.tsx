import React from 'react';
import logo from './assets/images/pokelogo-karvi.png';
import './App.css';
import Catalog from './views/Catalog';

function App() {
  return (
    <div className="container mx-auto h-screen">
      <img src={logo} className="mx-auto" />
      <Catalog/>
    </div>
  );
}

export default App;
