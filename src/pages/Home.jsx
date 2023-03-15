import Card from '../components/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) {
    return(
        <div className="sneakers__container">
        <div className="content">
          <div className="search">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block">
              <img src="/img/search.svg" />
              {searchValue && <img onClick={() => setSearchValue('')} className="clear buttomBtn" src="/img/remove.svg" alt="remove" />}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
          </div>
          <div className="sneakers">
            {items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Card
                  key={index}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  onFavorite={(obj) => onAddToFavorite(obj)}
                  onPlusButton={(obj) => onAddToCart(obj)}
                />
              ))}
          </div >
        </div>
      </div >
    );
}

export default Home;