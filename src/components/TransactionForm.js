// src/components/TransactionForm.js
import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || amount.trim() === '') return;
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      title,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setTitle('');
    setAmount('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
