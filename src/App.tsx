import React from 'react';
import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Route } from 'react-router';
import Catalog from './views/Catalog';
import Detail from './views/Detail';

function App() {
  return (
      <BrowserRouter basename='/pokemon-karvi'>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
