// src/components/AddExpense.js
import React, { useState } from 'react';
import axios from '../services/api';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/expenses', { description, amount })
      .then(() => {
        setDescription('');
        setAmount('');
        alert('Expense added successfully!');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
