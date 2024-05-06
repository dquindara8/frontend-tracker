// src/components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">Transactions</a></li>
        <li className="navbar-item"><a href="#">Reports</a></li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
