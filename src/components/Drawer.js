function Drawer({
    onClose
}) {

    return (
        <div className="overlay">
        <div className="drawer">
          <h2 className="delCor">
            Корзина
            <img onClick={onClose} className="buttomBtn" src="/img/remove.svg" alt="remove"/>
          </h2>
          <div className="items">
            <div className="cartItem">
              <img width={70} height={70} src='/img/sneakers/2.jpg' alt="cartSneakers"/>
              <div className="cartText">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
              </div>
              <img className="buttomBtn" src="/img/remove.svg" alt="remove"/>
            </div>
          </div >
          <div className="totalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow"/>
            </button>
          </div >
        </div>
      </div>
    )
}

export default Drawer;