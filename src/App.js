// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './Navigator';
import Store from './Store';
import UsdtPage from './cards/usdt'; 
import TonPage from './cards/ton'; 
import EthPage from './cards/eth'; 
import Gifts from './Gifts'; 
import './App.css'; 
import Leaderboard from './Leaderboard';
import Profile from './Profile'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Store />} />         
          <Route path="/usdt" element={<UsdtPage />} />  
          <Route path="/ton" element={<TonPage />} />
          <Route path="/eth" element={<EthPage />} />
          <Route path="/gifts" element={<Gifts />} />   
          <Route path="/leaderboard" element={<Leaderboard />} />    
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;