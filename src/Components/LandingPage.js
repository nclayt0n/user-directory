import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component{
    render(){
      return(
          <div className='landingPage'>
            <h1>User Directory</h1>
            <div id='beginLinkContainer'>
                <Link to={'/user-list'}>Browse Directory</Link>
            </div>
          </div>
      )  
    }
}
export default LandingPage