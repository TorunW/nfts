import React from 'react';
import '../App.css';
import { Card } from './Card';

export const NftDisplay = ({ nftList }) => {
  return (
    <div className='content-container'>
      {nftList.map((nft) => (
        <Card nft={nft} />
      ))}
    </div>
  );
};
