import React from 'react';
import { Link } from 'react-router-dom';
import './Store.css';
import giftTitle from './images/gift-title.png'; // Убедитесь, что путь правильный
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './Navigator';

const Store = () => {
  return (
    <div>
      <div className="titles">
          <img 
            src={giftTitle} 
            className="image-title" 
            alt="Gift" 
          />
        <p className="text-title">Buy and Send Gifts</p>
        <p className="text-description">Unique gifts for everyone by Crypto Pay.</p>
      </div>
      {/* Card 1*/}
      <div className="gift-grid1">
        <div className="gift-card1">
        <Link to="/usdt" className="link-button">
          <p className="gift-stock">3 of 500</p>
          <img src="/Animated_AgADgRgAApWfiUo.gif" alt="Delicious Cake" className="gift-image" crossOrigin="anonymous" />
          <p className="gift-name">Delicious Cake</p>
        </Link>
            <button className="gift-price">
              <img src='/usdt.svg' alt="USDT" className="price-icon" crossOrigin="anonymous" /> 10 USDT
            </button>
        </div>

        {/* Card 2 */}
        <div className="gift-card2">
        <Link to="/ton" className="link-button">
          <p className="gift-stock">802 of 5K</p>
          <img src="/PremiumGiftStickers_AgADuUAAAnv6SEk.gif" alt="Green Star" className="gift-image" />
          <p className="gift-name">Green Star</p>
        </Link>
          <button className="gift-price">
            <img src='/ton.svg' alt="TON" className="price-icon" /> 5 TON
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="gift-grid2">
      <div className="gift-card3">
        <Link to="/eth" className="link-button">
          <p className="gift-stock">458 of 5K</p>
          <img src="/PremiumGiftStickers_AgADaUAAArGISUk.gif" alt="Blue Star" className="gift-image" />
          <p className="gift-name">Blue Star</p>
        </Link>
        <button className="gift-price">
          <img src='/ethereum.svg' alt="ETH" className="price-icon" /> 0.01 ETH
        </button>
      </div>

        {/* Card 4 */}
        <div className="gift-card4">
          <p className="gift-stock">10K of 10K</p>
          <img src="/PremiumGiftStickers_AgADLFEAAucRQUk.gif" alt="Red Star" className="gift-image" />
          <p className="gift-name">Red Star</p>
          <button className="gift-sold-out">Sold Out</button>
        </div>
        </div>
      <Navigator />
    </div>
  );
};

export default Store;