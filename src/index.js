// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; // Import your Header component
import NavigationBar from './components/NavigationBar'; // Import the NavigationBar component
import TransactionForm from './components/TransactionForm'; // Import the TransactionForm component
import TransactionList from './components/TransactionList'; // Import the TransactionList component
import Footer from './components/Footer'; // Import the Footer component
import './index.css'; // Import your CSS file

const App = () => {
    const addTransaction = (newTransaction) => {
      // Add logic to handle adding the new transaction
      console.log('Adding new transaction:', newTransaction);
    };


    return (
        <div>
          <TransactionForm addTransaction={addTransaction} />
        </div>
      );
    };


ReactDOM.render(
  <React.StrictMode>
      <Header />
    <NavigationBar /> {/* Include the NavigationBar component */}
    <App />
    <TransactionList /> {/* Include the TransactionList component */}
    {/* Other components will go here */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
