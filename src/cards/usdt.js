import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './usdt.css';

const UsdtPage = () => {
  const navigate = useNavigate(); // Получаем функцию navigate из react-router-dom

  useEffect(() => {
    // Проверяем, доступен ли Telegram API
    if (window.Telegram && window.Telegram.WebApp) {
      // Устанавливаем кнопку "Назад" как видимую
      window.Telegram.WebApp.BackButton.show(); // Делаем кнопку видимой

      // Обработчик события нажатия кнопки "Назад"
      const handleBackButtonClick = () => {
        navigate(-1); // Возвращаем на предыдущую страницу
      };

      // Привязываем обработчик
      window.Telegram.WebApp.BackButton.onClick = handleBackButtonClick;

      // Возвращаем функцию для очистки при размонтировании
      return () => {
        window.Telegram.WebApp.BackButton.offClick = handleBackButtonClick;
      };
    }
  }, [navigate]); // Добавляем navigate в зависимости

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