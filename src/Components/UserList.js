import React from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'

class UserList extends React.Component{
    render(){
      return(
          <div className='userList'>
             <UserCard/>
          </div>
      )  
    }
}
export default withRouter(UserList)