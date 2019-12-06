import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component{
    render(){
      return(
          <div className='landingPage'>
              <header>User Directory</header>
              <div><Link to={'/user-list'}>Begin</Link></div>
          </div>
      )  
    }
}
export default LandingPage