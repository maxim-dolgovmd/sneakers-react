import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999 руб.',
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999 руб.',
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999 руб.',
    imageUrl: '/img/sneakers/4.jpg',
  },
]

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
  return (
    <div className="wrapper">
      <div className="overlay" style={{display: 'none'}}>
        <div className="drawer">
          <h2 className="delCor">
            Корзина
            <img className="buttomBtn" src="/img/remove.svg" alt="remove"/>
          </h2>
          <div className="items">
            {arrDrawer.map((obj) => (
              <Drawer
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}
          </div >
          <div className="totalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow"/>
            </button>
          </div >
        </div>
      </div>
      <Header/>
      <div className="sneakers__container">
        <div className="content">
          <div className="search">
            <h1>Все кроссовки</h1>
            <div className="search-block">
              <img src="/img/search.svg"/>
              <input placeholder="Поиск..."/>
            </div>
          </div>
          <div className="sneakers">
            {arr.map((obj)=> (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickPlus = {() => console.log('Нажали на плюс')}
                onFavorite = {() => console.log('Добавили в закладки')}
              />
            ))}
          </div >
        </div>
      </div >
    </div>
  );
}

export default App;
