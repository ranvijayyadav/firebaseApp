import React, { Component, Fragment } from 'react';
import { dataBase } from './../../firebase';
import { Table } from 'react-bootstrap';
import Order from '../../components/Order/Order';
import './Orders.css'

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

                        (<Table responsive striped bordered hover variant="dark">
                            <thead>
                                <tr >
                                    <th className='table-text'>Title</th>
                                    <th className='table-text'>Date</th>
                                    <th lassName='table-text'>Address</th>
                                    <th lassName='table-text'>Name</th>
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