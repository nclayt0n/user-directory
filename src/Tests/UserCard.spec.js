import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../Components/UserList';
import UserCard from '../Components/UserCard';
import { shallow } from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../App';
 
 describe('<UserCard />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <App>
                <UserList>
                    <UserCard/>
                </UserList>
            </App>
        </BrowserRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapshot', () => {
        const wrapper=shallow(<UserCard/>)
        expect(toJson(wrapper))
        .toMatchSnapshot()
    });
})
