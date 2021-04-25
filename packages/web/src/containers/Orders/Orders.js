import React, { Component, Fragment } from 'react';
import { dataBase } from './../../firebase';
import { Table } from 'react-bootstrap';
import Order from '../../components/Order/Order';

class Orders extends Component {

    state = {
        orders: []
    };

    componentDidMount() {

        const userRef = dataBase.collection('orders')
        userRef.get().then(orders => {
            let arrOrder = []
            arrOrder = orders.docs.map(order => {
                let value = order.data()
                if (value.title) {
                    return value;
                }
            })
                .filter(order => order && Object.keys(order).length !== 0)
            this.setState({ orders: arrOrder });
        })

    }
    onClickHandle = (order, setOrder) => {
        setOrder(order)
        this.props.history.push(`/order`);
    }

    render() {
        let orders = [];
        if (this.state.orders.length) {
            orders = this.state.orders;
        }
        return (

            <Fragment>
                {
                    !orders.length ? (<div>loading</div>) :

                        (<Table striped bordered hover variant="dark">
                            <thead>
                                <tr >
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Address</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => (
                                        <Order onClickHandle={this.onClickHandle} key={order.title} order={order} />
                                    ))
                                }

                            </tbody>
                        </Table>)
                }
            </Fragment>

        )
    }
}

export default Orders;