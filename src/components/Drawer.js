import axios from 'axios';
import React from 'react';
import AppContext from '../context';
import Info from './Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({
  onClose,
  items = [],
  onRemove,
}) {
  const { setCartItems, cartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // console.log(isOrderComplete)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = axios.post('https://64101201864814e5b64653d6.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6407e7872f01352a8a861eeb.mockapi.io/card' + item.id);
        await delay(2000);
      };

    } catch (error) {
      alert('Ошибка при создании заказа')
    }
    setIsLoading(false)
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="delCor">
          Корзина
          <img onClick={onClose} className="buttomBtn" src="/img/remove.svg" alt="remove" />
        </h2>

        {
          items.length > 0 ? (
            <div className='delRodBlock'><div className="items">
              {items.map((obj) => (
                <div className="cartItem" key={obj.id}>
                  <img width={70} height={70} src={obj.imageUrl} alt="cartSneakers" />
                  <div className="cartText">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="buttomBtn" src="/img/remove.svg" alt="remove" />
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
                <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                  Оформить заказ
                  <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </div ></div>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
              description={isOrderComplete ? `Ваш заказ ${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'}
              image={isOrderComplete ? '/img/complete-order.svg' : '/img/drawer.svg'}
            />
          )
        }

      </div>
    </div>
  )
}

export default Drawer;