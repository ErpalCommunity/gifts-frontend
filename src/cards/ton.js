import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cards-style.css';

const TonPage = () => {
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
      <div className="imgs-buy-ton">
        <img src="/PremiumGiftStickers_AgADuUAAAnv6SEk.gif" alt="Buy Delicious" className="del-gif" />
      </div>
      <div className="info-section">
        <div className="title-section">
          <h2 className="gift-title">Green Start</h2>
          <p className="gift-stock1">802 of 3k</p>
        </div>
        <p className="gift-description">
          Purchase this gift for the opportunity to give it to another user.
        </p>
        <div className="price-section">
          <img src="/ton-gr.svg" alt="USDT" className="price-icon" />
          <span className="price-text">5 TON</span>
        </div>
      </div>
    </div>
  );
};

export default TonPage;