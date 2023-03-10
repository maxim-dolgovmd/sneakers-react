import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import React from 'react';

// const arr 

const arrDrawer = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999 руб.',
    imageUrl: '/img/sneakers/2.jpg',
  },
]

function App() {

    const [items, setItems] = React.useState([])

    React.useEffect(() => {
      fetch('https://6407e7872f01352a8a861eeb.mockapi.io/items')
      .then((ren) => {
        return ren.json()
      })
      .then((json) => {
        setItems(json)
      })
    }, []);
    // const [count, setCount] = React.useState(5);
    const [cartOpened, setCartOpened] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([]);

    const onAddToCart = (obj) => {
      setCartItems([...cartItems, obj]);
    };

    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
    };

    // console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items = {cartItems} onClose = {() => setCartOpened(false)} /> : null}
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
              .filter(item => item.title.includes(searchValue))
              .map((obj, index)=> (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite = {() => console.log('Добавили в закладки')}
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
