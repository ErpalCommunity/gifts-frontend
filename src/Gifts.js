// src/Gifts.js
import React from 'react';
import './Gifts.css';
import Navigator from './Navigator';

const Gifts = () => {
  return (
    <div className="gifts-container">
      <h1 className='title-gifts'>Send Gifts in Telegram</h1>
      <h2 className='description-gifts'>Send gifts to users that can be stored</h2>
      <span className='description-gifts1'>in their app profile.</span>
      <Navigator />
    </div>
  );
};

export default Gifts;