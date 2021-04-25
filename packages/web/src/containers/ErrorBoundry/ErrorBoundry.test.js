
import { shallow, mount } from 'enzyme'
import ErrorBoundry from './ErrorBoundry';
const CompWithError = () => null;

describe('errorBoundry', () => {
    it('Should display an error if wrapped with error containg comp', () => {
        const wrapper = shallow(
            <ErrorBoundry>
                <CompWithError />
            </ErrorBoundry>
        );

        const error = new Error(test);
        wrapper.find(CompWithError).simulateError(error);
        expect(wrapper.state().hasError).toBe(true);
    })
})