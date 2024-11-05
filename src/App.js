// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './Navigator';
import Store from './Store';
import UsdtPage from './cards/usdt'; // Импорт компонента UsdtPage
import Gifts from './Gifts'; // Импорт компонента Gifts
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
       {/* Переместите Navigator выше Routes, чтобы он отображался на всех страницах */}
        {/* Настройка маршрутов */}
        <Routes>
          <Route path="/" element={<Store />} />         {/* Главная страница */}
          <Route path="/usdt" element={<UsdtPage />} />  {/* Страница USDT */}
          <Route path="/gifts" element={<Gifts />} />    {/* Страница Gifts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;