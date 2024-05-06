// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; // Import your Header component
import './index.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* Other components will go here */}
  </React.StrictMode>,
  document.getElementById('root')
);
