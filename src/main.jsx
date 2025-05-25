// იმპორტირება
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
// root - ის შექმნა.
const root = ReactDOM.createRoot(document.getElementById('root'));

// App კომპონენტის Render.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);