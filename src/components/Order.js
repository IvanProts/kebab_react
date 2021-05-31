import React from 'react';
import Shipment from './Shipment';

class Order extends React.Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];

    const isAvailable = burger && burger.status === 'available';

    if(!burger) return null;

    if(!isAvailable){
      return <li className="unavailable" key={key}>
        Вибачте, {burger ? burger.name : 'бургер'} тимчасово недоступний
      </li>
    }

    return (
    <li key={key}>
      <span>
        <span>{count}</span>
        шт. {burger.name}
        <span>{count * burger.price} ₴</span>
        <button className="cancelItem">&times;</button>
      </span>
    </li>
    )};

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) =>{
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === 'available';
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }

      return prevTotal;
      
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Ваше замовлення</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          </ul>

          {total > 0 ? (
            <Shipment total={total} />
          ) : (
            <div className="nothingSelected">
              Виберіть страву і добавте її до замовлення
            </div>
          )}
      </div>
    );
  }
}

export default Order;