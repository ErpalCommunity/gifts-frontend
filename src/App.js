// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './Navigator';
import Store from './Store';
import UsdtPage from './cards/usdt'; // Импорт компонента UsdtPage
import './App.css'; 

function App() {

  return (
    <Router>
      <div className="App">
        {/* Настройка маршрутов */}
        <Routes>
          <Route path="/" element={<Store />} />         {/* Главная страница */}
          <Route path="/usdt" element={<UsdtPage />} />  {/* Страница USDT */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;