import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../Components/UserList';
import { shallow } from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../App';
import LandingPage from '../Components/LandingPage';
 
 describe('<UserList />', () => {
    it('renders without crashing', () => {
        const div =document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <App>
                <LandingPage>
                    <UserList/>
                </LandingPage>
            </App>
        </BrowserRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot', () => {
        const wrapper=shallow(<UserList/>)
        expect(toJson(wrapper))
        .toMatchSnapshot()
    });
})
