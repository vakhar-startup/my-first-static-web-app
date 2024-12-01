// src/components/ExpenseList.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('/expenses')
      .then(response => setExpenses(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
