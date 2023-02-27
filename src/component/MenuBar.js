import React from 'react';
import Search from './Search';
import { Sort } from './Sort';

const MenuBar = ({ searchInput, setSearchInput, sortInput, setSortInput }) => {
  return (
    <div className='menubar'>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Sort sortInput={sortInput} setSortInput={setSortInput} />
    </div>
  );
};

export default MenuBar;
