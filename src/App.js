// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from './Navigator';
import Store from './Store';
import './App.css'; 
import giftTitle from './images/gift-title.png'; // Убедитесь, что путь правильный

function App() {
  const [imgError, setImgError] = useState(false); // Состояние для отслеживания ошибки изображения

  return (
    <Router>
      <div className="App">
        <div className="titles">
          {imgError ? (
            <p className="error-message">Ошибка: изображение не загрузилось.</p>
          ) : (
            <img 
              src={giftTitle} 
              className="image-title" 
              alt="Gift" 
              onError={() => setImgError(true)} // Обработчик ошибки загрузки
            />
          )}
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