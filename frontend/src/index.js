// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ✅ This fixes the error
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Optional: only include if the file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
