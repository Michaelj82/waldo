import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('site'));
root.render(
  <React.StrictMode>
    <div id='site'>
    <App></App>

    </div>
  </React.StrictMode>
);

