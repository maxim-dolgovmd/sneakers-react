import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

// console.log(styles);

function Card({
    id,
    title='',
    price,
    imageUrl,
    onFavorite,
    onPlusButton,
    favorited=false,
    isLoading=false,
}) 
    {

    const {isItemAdded} = React.useContext(AppContext);

    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {id,parentId: id, title, price, imageUrl}
    
    const onPlus = () => {
        onPlusButton(obj);
        // setIsAdded(!isAdded); // инвертация (true/false)
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    // React.useEffect(() => {
    //     console.log('Переменная изменилась')
    // },[isAdded]);
    
    return(
        <div className={styles.card}>
            {
                isLoading ? <ContentLoader 
                speed={2}
                width={160}
                height={200}
                viewBox="0 0 150 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">

                <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                <rect x="0" y="110" rx="10" ry="10" width="150" height="15" /> 
                <rect x="0" y="130" rx="10" ry="10" width="100" height="15" /> 
                <rect x="0" y="165" rx="10" ry="10" width="80" height="24" /> 
                <rect x="118" y="156" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> : 
                <>
                    {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}/>
                    </div>}
                    <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
                    <h5>{title}</h5>
                    <div className={styles.cardbox}>
                        <div>
                            <span>Цена:</span>
                            <b>{price +' руб.'}</b>
                        </div>
                        {onPlusButton && <img 
                            className={styles.plus} 
                            onClick={onPlus} 
                            src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                            alt="Plus2"
                        />}
                    </div>
                </>
            }
        </div>
    )
}

export default Card;