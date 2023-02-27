import React from 'react';
import '../App.css';

export const Card = ({ nft }) => {
  return (
    <div className='card'>
      <img className='img' src={nft.image_url} />
      <div className='info-container'>
        <h2>{nft.name}</h2>
      </div>
    </div>
  );
};
