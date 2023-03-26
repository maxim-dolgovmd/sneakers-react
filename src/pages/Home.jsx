import React from 'react';

import Card from '../components/Card';

function Home({
  items,
  searchValue,
  cartItems,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  loading,
})  {
  // console.log(cartItems)


  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (loading ? [...Array(10)] : filterItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlusButton={(obj) => onAddToCart(obj)}
        isLoading={loading}
        {... item}
      />
    ))
  }

  return (
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
          {renderItems()}
        </div >
      </div>
    </div >
  );
}

export default Home;