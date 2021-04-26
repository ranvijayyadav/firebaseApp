
import React from 'react';
import { UserConsumer } from './../../context/UserContext'
import './Order.css';

const Order = (props) => {
  console.log(JSON.stringify(props))
  const order = props.order;
  const address = props.order.address
  return (
    <UserConsumer>{({ setOrder }) =>
      <tr className='table-row' onClick={() => props.onClickHandle(order, setOrder)}>
        <td className='table-text'>{order.title}</td>
        <td className='table-text'>{order.bookingDate ? `${Date(order.bookingDate.toString())}` : `N/A`}</td>
        <td className='table-text'>{address ? `${address.street} ${address.zip} ${address.city} ${address.country}` : `N/A`}</td>
        <td className='table-text'>{order.customer ? `${order.customer.name}` : `N/A`}</td>
      </tr>}
    </UserConsumer>
  );
};
export default Order;