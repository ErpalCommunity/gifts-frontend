import React, { useEffect } from 'react';
import './usdt.css';

const UsdtPage = () => {
  useEffect(() => {
    // Показываем кнопку "Назад"
    if (window.Telegram) {
      window.Telegram.WebApp.onBackButtonPressed(() => {
        // Здесь вы можете определить, что делать при нажатии на кнопку "Назад"
        console.log('Back button pressed');
        // Например, можно вернуться на предыдущую страницу или закрыть мини-приложение
        // window.history.back(); // Вернуться на предыдущую страницу
        window.Telegram.WebApp.close(); // Закрыть мини-приложение
      });
      window.Telegram.WebApp.setupBackButton(); // Отображаем кнопку "Назад"
    }
  }, []);

  return (
    <div className="buy-container">
      <div className="img-buy">
        <img src="/Animated_AgADgRgAApWfiUo.gif" alt="Buy Delicious" className="del-gif" />
      </div>
      <div className="info-section">
        <div className="title-section">
          <h2 className="gift-title">Delicious Cake</h2>
          <p className="gift-stock1">3 of 500</p>
        </div>
        <p className="gift-description">
          Purchase this gift for the opportunity to give it to another user.
        </p>
        <div className="price-section">
          <img src="/usdt-gr.svg" alt="USDT" className="price-icon" />
          <span className="price-text">10 USDT</span>
        </div>
      </div>
    </div>
  );
};

export default UsdtPage;