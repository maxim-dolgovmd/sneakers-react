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

function App() {
  return (
    <div className="wrapper">
      <Drawer />
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
                onClick = {() => console.log(obj)}
              />
            ))}
          </div >
        </div>
      </div >
    </div>
  );
}

export default App;
