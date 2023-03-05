function Card() {
    return(
        <div className="card">
            <div className="favorite">
            <img src="/img/heart-unliked.svg"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardbox">
            <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/plus2.svg" alt="Plus2"/>
            </button>
            </div>
        </div>
    )
}

export default Card;