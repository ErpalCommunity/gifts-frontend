// src/USDT.js
import React from 'react';
import './usdt.css'; // Ensure the CSS file is properly linked

function USDT() {
  return (
    <div className="usdt-transaction">
      <h1>Transaction Page</h1>
      <p>You are about to make a transaction of <strong>10 USDT</strong>.</p>
      {/* Add any additional details about the transaction here */}
    </div>
  );
}

export default USDT;
