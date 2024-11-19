// src/components/OrderSearch.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const OrderSearch = ({ onSearch }) => {
  const [orderId, setOrderId] = useState('');

  const handleSearch = () => {
    if (orderId) {
      onSearch(orderId);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <TextField
        label="Order ID"
        variant="outlined"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        sx={{ marginBottom: '20px', width: '300px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Order Search
      </Button>
    </Box>
  );
};

export default OrderSearch;
