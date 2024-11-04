// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navigator from './Navigator';
import Store from './Store';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <div className="titles">
          <img src="/gift-title.png" className="image-title" alt="Gift" crossOrigin="anonymous" />
          <p className="text-title">Buy and Send Gifts</p>
          <p className="text-description">Unique gifts for everyone by Crypto Pay.</p>
        </div>
        <Store />
        <Navigator />
      </div>
    </Router>
  );
}

export default App;
