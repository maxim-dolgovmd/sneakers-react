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
}) {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    // console.log(loading)
    return (loading ? [...Array(10)] : filterItems).map((obj, index) => (
    // return (filterItems).map((obj, index) => (
      // return (loading && [...Array(10)]).map((obj, index) => (
      <Card
        key={index}
        title={obj?.title}
        id={obj?.id}
        price={obj?.price}
        imageUrl={obj?.imageUrl}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlusButton={(obj) => onAddToCart(obj)}
        added={cartItems.some(item => Number(item.id) === Number(obj.id))}
        // loading={items ? true : false}
        isLoading={loading}
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