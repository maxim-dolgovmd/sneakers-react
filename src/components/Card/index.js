import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader"

// console.log(styles);

function Card({
    id,
    title='',
    price,
    imageUrl,
    onFavorite,
    onPlusButton,
    favorited=false,
    added = false,
    isLoading,
}) 
    {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onPlus = () => {
        onPlusButton({id, title, price, imageUrl});
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
                </>
            }
        </div>
    )
}

export default Card;