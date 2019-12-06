import React from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'
import config from './config'
class UserList extends React.Component{
    constructor(){
    super()
        this.state={
            page:1,
            pageLimit:10,
            users:[]
  }
}
    componentDidMount(){
        const options={
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
        };
            Promise.all([
                fetch(`${config.API_ENDPOINT}`,
          options)
            ])
            .then(([usersRes]) => {
                console.log(usersRes)
                if (!usersRes.ok)
                    return usersRes.json().then(e => Promise.reject(e));
                    return Promise.all([usersRes.json()]);
            })
            .then(([users]) => {
               this.setState({users:users.results})
            })
            .catch(error => {
                console.error({ error });
            });
    }
    render(){
        console.log(this.state)
      return(
          <div className='userList'>
             <UserCard/>
          </div>
      )  
    }
}
export default withRouter(UserList)