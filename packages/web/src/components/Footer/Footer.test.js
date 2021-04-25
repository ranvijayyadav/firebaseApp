import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

let wrapped = shallow(<Footer />);
describe('Footer', () => {
    it("Should render Footer properly", () => {
        expect(wrapped).toMatchSnapshot();
    });
})