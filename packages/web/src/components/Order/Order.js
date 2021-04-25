
import React from 'react';
import { UserConsumer } from './../../context/UserContext'

const Order = (props) => {
  const order = props.order;
  const address = props.order.address
  return (
    <UserConsumer>{({ setOrder }) =>
      <tr onClick={() => props.onClickHandle(order, setOrder)}>
        <td>{order.title}</td>
        <td>{order.bookingDate ? `${Date(order.bookingDate.toString())}` : `N/A`}</td>
        <td>{address ? `${address.street} ${address.zip} ${address.city} ${address.country}` : `N/A`}</td>
        <td>{order.customer ? `${order.customer.name}` : `N/A`}</td>
      </tr>}
    </UserConsumer>
  );
};
export default Order;