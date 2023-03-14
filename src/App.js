import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// const arr 


function App() {

    const [items, setItems] = React.useState([])

    React.useEffect(() => {
      axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/items').then((res)=> {
        setItems(res.data);
      })
      axios.get('https://6407e7872f01352a8a861eeb.mockapi.io/card').then((res)=> {
        setCartItems(res.data);
      })
      // fetch('https://6407e7872f01352a8a861eeb.mockapi.io/items')
      //   .then((res) => {
      //     return res.json()
      //   })
      //   .then((json) => {
      //     setItems(json)
      //   })
    }, []);
    
    // const [count, setCount] = React.useState(5);
    const [cartOpened, setCartOpened] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([]);

    const [favorites, setFavorites] = React.useState([]);

    const onAddToCart = (obj) => {
      axios.post('https://6407e7872f01352a8a861eeb.mockapi.io/card', obj);
      setCartItems(prev => [...prev, obj]);
    };

    const onAddToFavorite = (obj) => {
      axios.post('https://64101201864814e5b64653d6.mockapi.io/favorites', obj);
      setFavorites(prev => [...prev, obj]);
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
      {cartOpened ? <Drawer items = {cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="sneakers__container">
        <div className="content">
          <div className="search">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
            <div className="search-block">
              <img src="/img/search.svg"/>
              {searchValue && <img onClick={() => setSearchValue('')}  className="clear buttomBtn" src="/img/remove.svg" alt="remove"/>}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            </div>
          </div>
          <div className="sneakers">
            {items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index)=> (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite = {(obj) => onAddToFavorite(obj)}
                onPlusButton = {(obj) => onAddToCart(obj)}
              />
            ))}
          </div >
        </div>
      </div >
    </div>
  );
}

export default App;
