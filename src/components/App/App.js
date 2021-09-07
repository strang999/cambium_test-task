import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

export const AppContext = React.createContext();

const App = () => {
  const [allData, setAllData] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [opacity, setOpacity] = useState('');

  useEffect(
    () => {
      axios('https://cnheat.cambiumnetworks.com/accounts/images/images.json')
        .then(response => {
          setAllData(response.data)
          setCategoryData(response.data?.['Butterfly'] ?? [])
        }
        )
        .catch(error => {
          throw error;
        })
    },
    []
  );

  const onSearchHandle = (searchValue) => {
    const categoryKey = searchValue.replace(/\b\w/g, input => input.toUpperCase())
    const filteredData = allData[categoryKey] || [];
    setCategoryData(filteredData);
  }
  const onCategoryChange = (categoryName) => setCategoryData(allData[categoryName]);
  const onOpacityChange = (event) => setOpacity(event.target.value);

  return (
    <AppContext.Provider value={opacity}>
      <header>
        <Searchbar onSearchHandle={onSearchHandle} />
      </header>
      <div className='layout-container'>
        <Navbar categories={Object.keys(allData)} onCategoryChange={onCategoryChange} onOpacityChange={onOpacityChange} />
        <main className='grid-container'>
          {categoryData.length ?
            <GalleryGrid filteredData={categoryData} opacity={opacity} /> : <div className='grid-container--no-results'>No Search Found</div>}
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
