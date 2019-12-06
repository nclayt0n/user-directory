import React from 'react'
import {withRouter} from 'react-router-dom'

class UserCard extends React.Component{
    render(){
      return(
          <div className='userCard'>
             User Card
          </div>
      )  
    }
}
export default withRouter(UserCard)