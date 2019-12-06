import React from 'react'
import {withRouter} from 'react-router-dom'

class UserCard extends React.Component{
    render(){
      return(
          <div className='userCard'>
             <ul>User
             <li>First + Last Name</li>
             <li>email</li>
             <li>phone</li>
             <li>age</li>
             <li>gender</li>
             </ul>
             <img alt=' will be dislayed here'></img>
          </div>
      )  
    }
}
export default withRouter(UserCard)