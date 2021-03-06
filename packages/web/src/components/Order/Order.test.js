import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';


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

let wrapped = shallow(<Order order={orderMock} />);
describe('Order', () => {
    it("Should render Order properly", () => {
        expect(wrapped).toMatchSnapshot();
    });
})