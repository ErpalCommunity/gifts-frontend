import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cards-style.css';

const EthPage = () => {
  const navigate = useNavigate(); // Получаем функцию navigate из react-router-dom

  useEffect(() => {
    // Проверяем, доступен ли Telegram API
    if (window.Telegram && window.Telegram.WebApp) {
      // Устанавливаем кнопку "Назад" как видимую
      window.Telegram.WebApp.BackButton.onClick = () => {
        navigate(-1); // Возвращаем на предыдущую страницу
      };

      window.Telegram.WebApp.BackButton.show(); // Делаем кнопку видимой

      // Функция для очистки при размонтировании
      return () => {
        window.Telegram.WebApp.BackButton.offClick();
      };
    }
  }, [navigate]); // Добавляем navigate в зависимости

  return (
    <div className="buy-container">
      <div className="imgs-buy">
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

export default EthPage;