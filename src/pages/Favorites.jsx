import Card from '../components/Card';

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="sneakers__container">
      <div className="content">
        <div className="search">
          <h1>Мои закладки</h1>
        </div>
        <div className="sneakers">
          {(items || [])
            .map((obj, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...obj}
              />
            ))}
        </div >
      </div>
    </div >
  );
}
export default Favorites;