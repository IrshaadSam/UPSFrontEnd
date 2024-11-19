import React, { useState } from 'react';
import OrderSearch from '../components/OrderSearch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
      if (response.data) {
        setOrderData(response.data); // This sets the order data
        // Pass orderData to OrderDetailsPage using navigate
        navigate('/order-details', { state: { orderData: response.data } });
      } else {
        alert('Order not found');
      }
    } catch (error) {
      console.error(error);
      alert('Order not found');
    }
  };

  return (
    <div>
      <OrderSearch onSearch={handleSearch} />
      
      {/* Optionally, display orderData on HomePage */}
      {orderData && (
        <div>
          <h3>Order Details:</h3>
          <p>Order ID: {orderData.order_id}</p>
          <p>Customer Name: {orderData.customer_name}</p>
          <p>Address: {orderData.address}</p>
          <p>Postal Code: {orderData.postal_code}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
