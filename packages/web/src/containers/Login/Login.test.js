import { shallow, mount } from 'enzyme'
import Login from './Login';

describe('Login', () => {
    it('It renders properly', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper).toMatchSnapshot();
    });
})