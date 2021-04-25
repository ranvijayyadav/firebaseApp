import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapped = shallow(<App />);
describe('App', () => {
  it("Should render app properly", () => {
    expect(wrapped).toMatchSnapshot();
  })
})
