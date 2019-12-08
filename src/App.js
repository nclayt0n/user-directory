import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import UserList from './Components/UserList';
import NotFound from './Components/NotFound';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/user-list' component={UserList}/>
        <NotFound/>
      </Switch>
    </div>
  );
}}

export default App;
