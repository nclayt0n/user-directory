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
        // const options={
        //     method:'GET',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        // };
        //     Promise.all([
        //         fetch(`${config.API_ENDPOINT}`,
        //   options)
        //     ])
        //     .then(([usersRes]) => {
        //         if (!usersRes.ok)
        //             return usersRes.json().then(e => Promise.reject(e));
        //             return Promise.all([usersRes.json()]);
        //     })
        //     .then(([users]) => {
        //        this.setState({users:users.results})
        //     })
        //     .catch(error => {
        //         console.error({ error });
        //     });
    }
    render(){
        let usersDisplayed=this.state.users.slice(this.state.page*10-10,this.state.page*10);
        console.log(this.state.page)
      return(
          <div className='userList'>
             <UserCard/>
            {this.state.page===1?null: <button type='button' onClick={()=>this.setState({page:this.state.page-1})}>Back</button>}
            {this.state.page===1?null: <button type='button'>{this.state.page-1}</button>}
            <button type='button'>{this.state.page}</button>
            <button type='button'>{this.state.page+1}</button>
      <button type='button' onClick={()=>this.setState({page:this.state.page+1})}>Next</button>

          </div>
      )  
    }
}
export default withRouter(UserList)