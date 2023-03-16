import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

// const arr 


function App() {

  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
    axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/card').then((res) => {
      setCartItems(res.data);
    })
    axios.get('https://64101201864814e5b64653d6.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    })
  }, []);

  // const [count, setCount] = React.useState(5);
  const [cartOpened, setCartOpened] = React.useState(false);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const onAddToCart = (obj) => {
    axios.post('https://6407e7872f01352a8a861eeb.mockapi.io/card', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://64101201864814e5b64653d6.mockapi.io/favorites/${obj.id}`);
        // setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://64101201864814e5b64653d6.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в alert');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6407e7872f01352a8a861eeb.mockapi.io/card/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" element={<Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />} />
        <Route
          path="/favorites"
          element={<Favorites
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />}
        />
      </Routes>

    </div>
  );
}

export default App;
