import React from 'react';
import './Store.css';

const Store = () => {
  return (
    <div>
      {/* Card 1*/}
      <div className="gift-grid1">
        <div className="gift-card1">
          <p className="gift-stock">3 of 500</p>
          <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmNQqNA6YUhxetvwCEu98CcuRagvfM9iSQi93k4hVvK1N3" alt="Delicious Cake" className="gift-image" crossOrigin="anonymous" />
          <p className="gift-name">Delicious Cake</p>
          <button className="gift-price">
            <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmdwxFEuhNJxTxk4JrkjKN7mLjhEZhPp8ynVPhTcCo4eme' alt="USDT" className="price-icon" crossOrigin="anonymous" /> 10 USDT
          </button>
        </div>
        {/* Card 2 PremiumGiftStickers_AgADuUAAAnv6SEk.gif*/}
        <div className="gift-card2">
            <p className="gift-stock">802 of 5K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmXCN7HugJ4aPkUhsJ3zY6jSXVkHtvCWFCyJrkcWEmBPwB" alt="Green Star" className="gift-image" />
            <p className="gift-name">Green Star</p>
            <button className="gift-price">
              <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmeDhBiiQUjuBVNKBhaAPUSsRsNRxFpVihfLFhaYXaedk9' alt="TON" className="price-icon" /> 5 TON
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="gift-grid2">
          <div className="gift-card3">
            <p className="gift-stock">458 of 5K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmU57b564sQZNGaDQAjbxZKQfp814jWzt9UmFUzvSsGWmN" alt="Blue Star" className="gift-image" />
            <p className="gift-name">Blue Star</p>
            <button className="gift-price">
              <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmUsMWVBtLoysU2UixsgEGbA18bZd9NnbUivwFJ1vd3STf' alt="ETH" className="price-icon" /> 0.01 ETH
            </button>
          </div>

          {/* Card 4 PremiumGiftStickers_AgADLFEAAucRQUk.gif */}
          <div className="gift-card4">
            <p className="gift-stock">10K of 10K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmRPqZfnMPB6fptQ8mbkUTBkmeVavpdyQdT53xYDUni4Nb" alt="Red Star" className="gift-image" />
            <p className="gift-name">Red Star</p>
            <button className="gift-sold-out">Sold Out</button>
          </div>
      </div>
    </div>
  );
};

export default Store;
