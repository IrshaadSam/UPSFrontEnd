// src/pages/OrderDetailsPage.js
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { state } = useLocation(); // Extract state passed from HomePage
  const orderData = state?.orderData; // Get order data from state

  // Debugging: Log the state to ensure it's being passed correctly
  console.log(state);  // Add this to check if state is being passed correctly

  if (!orderData) {
    return <Typography variant="h6" color="error">Order not found</Typography>;
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h5" gutterBottom>Order Details</Typography>

      {/* Text Fields for Order Information */}
      <TextField
        label="Order ID"
        value={orderData.order_id || ''}
        fullWidth
        InputProps={{ readOnly: true }}
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        label="Customer Name"
        value={orderData.customer_name || ''}
        fullWidth
        InputProps={{ readOnly: true }}
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        label="Address"
        value={orderData.address || ''}
        fullWidth
        InputProps={{ readOnly: true }}
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        label="Postal Code"
        value={orderData.postal_code || ''}
        fullWidth
        InputProps={{ readOnly: true }}
        sx={{ marginBottom: '15px' }}
      />

      {/* Display Additional Order Information below the Textboxes */}
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Order Details:</Typography>
      <Typography variant="body1">Customer Name: {orderData.customer_name}</Typography>
      <Typography variant="body1">Address: {orderData.address}</Typography>
      <Typography variant="body1">Postal Code: {orderData.postal_code}</Typography>
      <Typography variant="body1">Order ID: {orderData.order_id}</Typography>
    </Box>
  );
};

export default OrderDetailsPage;
