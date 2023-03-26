import Card from '../components/Card';
import AppContext from '../context';
import React from 'react';

function Favorites() {

  const {favorites, onAddToFavorite} = React.useContext(AppContext);
  // console.log(state)

  return (
    <div className="sneakers__container">
      <div className="content">
        <div className="search">
          <h1>Мои закладки</h1>
        </div>
        <div className="sneakers">
          {favorites
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