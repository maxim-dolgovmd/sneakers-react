import styles from './Card.module.scss';
console.log(styles);

function Card({
    title='',
    price,
    imageUrl,
    onClick,
}) {

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardbox}>
            <div>
                <span>Цена:</span>
                <b>{price}</b>
            </div>
            <button onClick={onClick}>
                <img width={11} height={11} src="/img/plus2.svg" alt="Plus2"/>
            </button>
            </div>
        </div>
    )
}

export default Card;