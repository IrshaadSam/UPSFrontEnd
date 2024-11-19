// src/components/OrderDetails.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const OrderDetails = ({ orderData }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <TextField label="Order ID" value={orderData.order_id} InputProps={{ readOnly: true }} sx={{ marginBottom: '10px' }} />
      <TextField label="Customer Name" value={orderData.customer_name} InputProps={{ readOnly: true }} sx={{ marginBottom: '10px' }} />
      <TextField label="Address" value={orderData.address} InputProps={{ readOnly: true }} sx={{ marginBottom: '10px' }} />
      <TextField label="Postal Code" value={orderData.postal_code} InputProps={{ readOnly: true }} sx={{ marginBottom: '10px' }} />
    </Box>
  );
};

export default OrderDetails;
