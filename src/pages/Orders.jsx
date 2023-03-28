import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import axios from 'axios';

function Orders() {
  const [order, setOrder] = React.useState([]);
  const {onAddToCart, onAddToFavorite} = React.useContext(AppContext) 
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function orderData() {
      try {
        const {data} = await axios.get('https://64101201864814e5b64653d6.mockapi.io/orders')
        // setOrder(data.map(obj => obj.items.flat()))
        setOrder(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов')
      }
    }

    orderData()
  }, [])

  return (
    <div className="sneakers__container">
      <div className="content">
        <div className="search">
          <h1>Мои заказы</h1>
        </div>
        <div className="sneakers">
          {(loading ? [...Array(8)] : order).map((item, index) => (
              <Card
                key={index}
                isLoading={loading}
                {...item}
              />
            ))}
        </div >
      </div>
    </div >
  );
}
export default Orders;