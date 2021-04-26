import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapped = shallow(<Header />);
describe('Header', () => {
    it("Should render Header properly", () => {
        expect(wrapped).toMatchSnapshot();
    });
})