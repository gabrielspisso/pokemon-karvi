import React from 'react';
import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Route } from 'react-router'
import Catalog from './views/Catalog';
import Detail from './views/Detail';
import logo from './assets/images/pokelogo-karvi.png';
import './App.css';

function App() {
  return (
    <div className="container mx-auto h-screen">
      <img src={logo} className="mx-auto" />
      <BrowserRouter>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
