import './App.css';
import CardList from './components/carlist/CardList';
import { useState, useEffect } from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getDataFetch();
  }, []);

  async function getDataFetch() {
    const data = await fetch('https://golden-whispering-show.glitch.me');
    const dataJson = await data.json();
    if (dataJson.length) {
      console.log('dataJson', dataJson);
      setAllProducts(dataJson);
      return;
    }
    console.log('nesigavo parsisiusti duomenu');
    return false;
  }

  function onDeleteHandler(idOfProductDelete) {
    setAllProducts((prevState) => {
      return prevState.filter((postsObj) => postsObj.id !== idOfProductDelete);
    });
  }

  return (
    <div className='App'>
      {allProducts.length === 0 && <h2>Loading...</h2>}
      {/* //kaip sito neberasyti? */}
      <CardList dataObject={allProducts} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
