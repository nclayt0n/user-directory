import React from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'
import config from './config'
import '../App.css'
const uuidv4 = require('uuid/v4');

class UserList extends React.Component{
    constructor(){
    super()
        this.state={
            page:1,
            pageLimit:10,
            users:[]
        }
    }   
    callApi=(num)=>{
        this.setState({page:num})
        const options={
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
        };
            Promise.all([
                fetch(`${config.API_ENDPOINT}?results=10&page=${num}&seed=abc&inc=name,email,phone,dob,gender,picture`,
          options)
            ])
            .then(([usersRes]) => {
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
    componentDidMount(){
        const options={
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
        };
            Promise.all([
                fetch(`${config.API_ENDPOINT}?results=10&page=${this.state.page}&seed=abc&inc=name,email,phone,dob,gender,picture`,
          options)
            ])
            .then(([usersRes]) => {
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
    let usersDisplayed=this.state.users.slice(0,10);
      return(
          <div className='userList'>
          <h2>User Directory</h2>
          {usersDisplayed.map((user)=>
            <UserCard
                key={uuidv4()}
                age={user.dob.age}
                email={user.email}
                gender={user.gender}
                name={user.name}
                phone={user.phone}
                picture={user.picture}
            />
          )}
          <div className='buttonContainer'>
            {this.state.page===1 ? null: 
                <button className='button' type='button' onClick={()=>this.callApi(this.state.page-1)}>Back</button>}
            {this.state.page===1 ? null: 
                <button className='button' type='button' onClick={()=>this.callApi(this.state.page-1)}>{this.state.page-1}</button>}

                <button className='button' id='currentPage' type='button'>{this.state.page}</button>

                <button className='button' type='button' onClick={()=>this.callApi(this.state.page+1)}>{this.state.page+1}</button>

                <button className='button' type='button' onClick={()=>this.callApi(this.state.page+1)}>Next</button>
            </div>

          </div>
      )  
    }
}
export default withRouter(UserList)