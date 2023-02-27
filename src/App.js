import './App.css';
import { useState, useEffect } from 'react';
import { NftDisplay } from './component/NftDisplay';
import MenuBar from './component/MenuBar';

function App() {
  const [nftList, setNftList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortInput, setSortInput] = useState('');

  useEffect(() => {
    getNfts();
  }, []);

  useEffect(() => {
    getSearchResult();
  }, [searchInput]);

  const getNfts = async () => {
    const response = await fetch(
      `https://api.opensea.io/api/v1/assets?format=json`
    );
    const res = await response.json();

    let filteredNftList = res.assets.filter(
      (nft, index) =>
        nft.image_url !== null &&
        nft.name !== null &&
        !nft.name.toLowerCase().includes('base')
    );

    setNftList(filteredNftList);
  };

  const getSearchResult = () => {
    const updatedFilteredList = nftList.filter((nft) =>
      nft.name.toLowerCase().includes(searchInput)
    );

    setNftList(updatedFilteredList);
  };

  const getSortedList = (a, b) => {
    if (sortInput === 'A->Z') {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    } else if (sortInput === 'A<-Z') {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    }
  };

  nftList.sort(getSortedList);

  return (
    <div className='App'>
      <MenuBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        sortInput={sortInput}
        setSortInput={setSortInput}
      />
      <div className='header-text'>
        <h1>
          Hello <span>user</span>!
        </h1>
      </div>
      <NftDisplay nftList={nftList} />
    </div>
  );
}

export default App;
