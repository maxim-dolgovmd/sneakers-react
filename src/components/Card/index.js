import styles from './Card.module.scss';
import React from 'react';

// console.log(styles);

function Card({
    id,
    title='',
    price,
    imageUrl,
    onFavorite,
    onPlusButton,
    favorited,
}) 
    {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onPlus = () => {
        onPlusButton({title, price, imageUrl});
        setIsAdded(!isAdded); // инвертация (true/false)
    };

    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl});
        setIsFavorite(!isFavorite);
    };

    // React.useEffect(() => {
    //     console.log('Переменная изменилась')
    // },[isAdded]);
    
    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardbox}>
                <div>
                    <span>Цена:</span>
                    <b>{price +' руб.'}</b>
                </div>
                <img className={styles.plus} onClick={onPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus2"/>
            </div>
        </div>
    )
}

export default Card;