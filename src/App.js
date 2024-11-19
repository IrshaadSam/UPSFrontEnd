// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderDetailsPage from './pages/OrderDetailsPage';
import HomePage from  './pages/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage with OrderSearch */}
        <Route path="/order-details" element={<OrderDetailsPage />} /> {/* OrderDetailsPage */}
      
      </Routes>
    </Router>
  );
}

export default App;
