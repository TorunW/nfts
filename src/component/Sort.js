import React, { useState } from 'react';

export const Sort = ({ sortInput, setSortInput }) => {
  return (
    <select onChange={(e) => setSortInput(e.target.value)}>
      <option value=''>Sort NFT's</option>
      <option value={'A->Z'}>{'A->Z'}</option>
      <option value={'A<-Z'}>{'A<-Z'}</option>
    </select>
  );
};
