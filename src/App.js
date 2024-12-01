/* import React from 'react';

function App() {
  const value = 'Faheem';
  return <div>Hello {value}</div>;
} 


export default App;

*/

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
