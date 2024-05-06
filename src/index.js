// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; // Import your Header component
import NavigationBar from './components/NavigationBar'; // Import the NavigationBar component
import TransactionList from './components/TransactionList'; // Import the TransactionList component
import Footer from './components/Footer'; // Import the Footer component
import './index.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NavigationBar /> {/* Include the NavigationBar component */}
    <TransactionList /> {/* Include the TransactionList component */}
    {/* Other components will go here */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
