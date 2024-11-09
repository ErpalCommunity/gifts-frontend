import React from 'react';
import './Gifts.css';
import Navigator from './Navigator';
import { Link } from 'react-router-dom';

const Gifts = () => {
  return (
    <div className="gifts-container">
      <h1 className='title-gifts'>Send Gifts in Telegram</h1>
      <h2 className='description-gifts'>Send gifts to users that can be stored</h2>
      <span className='description-gifts1'>in their app profile.</span>
      <div className="no-gifts">
        <img src="/balloons.svg" alt="Balloons" className="balloons-image" />
        <p className="no-gifts-text">You don't have any gifts yet.</p>
        <Link to="/" className="open-store-link">Open Store</Link>
      </div>
      <Navigator />
    </div>
  );
};

export default Gifts;
