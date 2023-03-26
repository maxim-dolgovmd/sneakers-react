import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';

function App() {

  const [items, setItems] = React.useState([])

  const [cartOpened, setCartOpened] = React.useState(false);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  // const [itemCarts, setitemCarts] = React.useState([]);
  

  React.useEffect(() => {
    async function fetchData() {
      const cartResponce = await axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/card')
      const favoriteResponce = await axios.get('https://64101201864814e5b64653d6.mockapi.io/favorites')
      const itemsResponce = await axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/items')

      setIsLoading(false);

      setCartItems(cartResponce.data)
      setFavorites(favoriteResponce.data)
      setItems(itemsResponce.data)
    }

    fetchData();
  }, []);

  // const [count, setCount] = React.useState(5);

  const onAddToCart = async (obj) => {
    console.log(obj);
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://6407e7872f01352a8a861eeb.mockapi.io/card/${obj.id}`);
    } else {
      axios.post('https://6407e7872f01352a8a861eeb.mockapi.io/card', obj);
      setCartItems(prev => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6407e7872f01352a8a861eeb.mockapi.io/card/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://64101201864814e5b64653d6.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));  // удаление фаворитов на фронте убрать если че
      } else {
        const { data } = await axios.post('https://64101201864814e5b64653d6.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в alert');
    }
  };


  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
      <div className="wrapper">
        {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} added={true} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="/" element={<Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            loading={isLoading}
          />} />
          <Route
            path="/favorites"
            element={<Favorites/>} 
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
