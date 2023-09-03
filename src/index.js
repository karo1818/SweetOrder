import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login.js';
import ClienteMain from './Components/ClientMain.js';
import AdminMain from './Components/AdminMain.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<ClienteMain />} />
        <Route path="/admin" element={<AdminMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
