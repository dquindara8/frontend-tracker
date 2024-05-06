// src/components/TransactionList.js
import React from 'react';
import './TransactionList.css';

const TransactionList = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, title: 'Groceries', amount: -50 },
    { id: 2, title: 'Salary', amount: 2000 },
    // Add more transactions as needed
  ];

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      <ul className="transaction-items">
        {transactions.map(transaction => (
          <li key={transaction.id} className="transaction-item">
            <span className="transaction-title">{transaction.title}</span>
            <span className="transaction-amount">{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
