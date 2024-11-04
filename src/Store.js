import React from 'react';
import './Store.css';

const Store = () => {
  return (
    <div>
      {/* Card 1*/}
      <div className="gift-grid1">
        <div className="gift-card1">
          <p className="gift-stock">3 of 500</p>
          <img src="Animated_AgADgRgAApWfiUo.gif" alt="Delicious Cake" className="gift-image" crossOrigin="anonymous" />
          <p className="gift-name">Delicious Cake</p>
          <button className="gift-price">
            <img src='usdt.svg' alt="USDT" className="price-icon" crossOrigin="anonymous" /> 10 USDT
          </button>
        </div>
        {/* Card 2*/}
        <div className="gift-card2">
            <p className="gift-stock">802 of 5K</p>
            <img src="PremiumGiftStickers_AgADuUAAAnv6SEk.gif" alt="Green Star" className="gift-image" />
            <p className="gift-name">Green Star</p>
            <button className="gift-price">
              <img src='ton.svg' alt="TON" className="price-icon" /> 5 TON
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="gift-grid2">
          <div className="gift-card3">
            <p className="gift-stock">458 of 5K</p>
            <img src="PremiumGiftStickers_AgADaUAAArGISUk.gif" alt="Blue Star" className="gift-image" />
            <p className="gift-name">Blue Star</p>
            <button className="gift-price">
              <img src='ethereum.svg' alt="ETH" className="price-icon" /> 0.01 ETH
            </button>
          </div>

          {/* Card 4 */}
          <div className="gift-card4">
            <p className="gift-stock">10K of 10K</p>
            <img src="PremiumGiftStickers_AgADLFEAAucRQUk.gif" alt="Red Star" className="gift-image" />
            <p className="gift-name">Red Star</p>
            <button className="gift-sold-out">Sold Out</button>
          </div>
      </div>
    </div>
  );
};

export default Store;
