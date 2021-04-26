import React from 'react';
import { shallow } from 'enzyme';
import OrderDetails from './OrderDetails';

const orderMock = {
    order: {
        title: "Dont let me think , this is a long book title {looks good Edited}",
        bookingDate: 1575306000,
        customer: {
            phone: "0504565722",
            email: "bobTheLast@mail.com",
            name: "long name to check view"
        },
        address: {
            country: "united state of america",
            zip: "20000",
            street: "long street to check view",
            city: "long city name that's hard "
        }
    }
};


const UserContext = React.createContext({ order: orderMock });
let wrapped = shallow(
    <UserContext.Provider
        value={{
            order: orderMock,
        }}
    >
        <OrderDetails />
    </UserContext.Provider>

);
describe('Order Details', () => {
    it("Should render Order Details properly", () => {
        expect(wrapped).toMatchSnapshot();
    });
})