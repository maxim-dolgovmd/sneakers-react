function Drawer({
  onClose,
  items=[],
}) {

    return (
        <div className="overlay">
        <div className="drawer">
          <h2 className="delCor">
            Корзина
            <img onClick={onClose} className="buttomBtn" src="/img/remove.svg" alt="remove"/>
          </h2>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
                <img width={70} height={70} src={obj.imageUrl} alt="cartSneakers"/>
                <div className="cartText">
                  <p>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img  className="buttomBtn" src="/img/remove.svg" alt="remove"/>
              </div>
            ))}
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