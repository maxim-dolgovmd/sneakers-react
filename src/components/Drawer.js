import axios from 'axios';
import React from 'react';

function Drawer({
  onClose,
  items=[],
  onRemove,
}) 
  {
    
    
    return (
      <div className="overlay">
        <div className="drawer">
          <h2 className="delCor">
            Корзина
            <img onClick={onClose} className="buttomBtn" src="/img/remove.svg" alt="remove"/>
          </h2>

          {
            items.length > 0 ? (
              <div className='delRodBlock'><div className="items">
              {items.map((obj) => (
                <div className="cartItem" key={obj.id}>
                  <img width={70} height={70} src={obj.imageUrl} alt="cartSneakers"/>
                  <div className="cartText">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img onClick={()=>onRemove(obj.id)}  className="buttomBtn" src="/img/remove.svg" alt="remove"/>
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
            </div ></div>
            ) : (
              <div className='cartEmpty'>
            <img width='120px' height='120px' src='/img/drawer.svg' alt='drawer'/>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className='emptyBasket'>
              <img  src='/img/strelka.png' alt='strelka left'/>
              Вернуться назад
            </button>
          </div>
            )
          }

        </div>
      </div>
    )
}

export default Drawer;