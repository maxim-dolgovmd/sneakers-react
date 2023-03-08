import styles from './Card.module.scss';
import React from 'react';

// console.log(styles);

function Card({
    title='',
    price,
    imageUrl,
    onFavorite,
}) 
    {
    const [isAdded, setIsAdded] = React.useState(false);

    const onPlus = () => {
        setIsAdded(!isAdded); // инвертация (true/false)
    };

    // React.useEffect(() => {
    //     console.log('Переменная изменилась')
    // },[isAdded]);
    
    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardbox}>
                <div>
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus2"/>
            </div>
        </div>
    )
}

export default Card;