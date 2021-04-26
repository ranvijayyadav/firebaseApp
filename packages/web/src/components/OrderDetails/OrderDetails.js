import React, { useContext, Fragment } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { UserContext } from "./../../context/UserContext";
import "./OrderDetails.css"

const OrdersDetails = () => {
    const { order } = useContext(UserContext);
    return (
        <Fragment>

            <Card className='order-card'>
                <Card.Body>
                    <Card.Title>Order Details</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className='table-text'>Title: {` ${order.title}`}</ListGroupItem>
                    <ListGroupItem className='table-text'>Customer name: {order.customer ? `${order.customer.name}` : `N/A`}</ListGroupItem>
                    <ListGroupItem className='table-text'>Date: {order.bookingDate ? `${Date(order.bookingDate.toString())}` : `N/A`}</ListGroupItem>
                    <ListGroupItem className='table-text'>Customer address: {order.address ? `${order.address.street} ${order.address.zip} ${order.address.city} ${order.address.country}` : `N/A`}</ListGroupItem>

                </ListGroup>
            </Card>

        </Fragment>
    );
};

export default OrdersDetails;
