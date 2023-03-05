import Header from './components/Header';
import Card from './components/Card'
import Drawer from './components/Drawer';

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
            <Card/>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardbox">
                <div>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
    
                <button>
                  <img width={11} height={11} src="/img/plus2.svg" alt="Plus2"/>
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardbox">
                <div>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
    
                <button>
                  <img width={11} height={11} src="/img/plus2.svg" alt="Plus2"/>
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardbox">
                <div>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
    
                <button>
                  <img width={11} height={11} src="/img/plus2.svg" alt="Plus2"/>
                </button>
              </div>
            </div>
          </div >
        </div>
      </div >
    </div>
  );
}

export default App;
