import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../Components/LandingPage';
import { shallow } from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../App';
 
 describe('<LandingPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <App>
                <LandingPage/>
            </App>
        </BrowserRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot', () => {
        const wrapper=shallow(<LandingPage/>)
        expect(toJson(wrapper))
        .toMatchSnapshot()
    });
})
