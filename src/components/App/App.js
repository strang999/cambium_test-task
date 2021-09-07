import axios from 'axios';
import react from 'react';
import { useCallback, useEffect, useState } from 'react';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

export const AppContext = react.createContext();
function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const [categories, setCategories] = useState([]);

  const handleSearch = (event) => {
    const allowed = event.target.value || 'Butterfly';
    const filtered = Object.values(Object.fromEntries(
      Object.entries(allData).filter(
        ([key, val]) => allowed.includes(key)
      )
    ))
    setFilteredData(filtered);
  }
  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
  }


  useEffect(() => {
    console.log('use');
    axios('https://cnheat.cambiumnetworks.com/accounts/images/images.json')
      .then(response => {
        setAllData(response.data);
        setCategories(Object.keys(response.data))
        console.log(allData);
        console.log(filteredData);
        console.log(categories);
      })
      .catch(error => {
        console.log('Error occurred: ' + error);
      })

  }, []);

  return (
    <AppContext.Provider value={opacity}>
      <div>
        <Searchbar handleSearch={handleSearch} />
        <Navbar handleOpacityChange={handleOpacityChange} />
        {filteredData.length > 0 ? <GalleryGrid filteredData={filteredData.length > 0 && filteredData} opacity={opacity} /> : <div>No Search Found</div>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
