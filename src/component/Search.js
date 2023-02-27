import React, { useState } from 'react';
import '../App.css';

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <input
      type='text'
      value={searchInput}
      placeholder='Search'
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

export default Search;
