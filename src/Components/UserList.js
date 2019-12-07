import React from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'
import '../App.css'
import ApiService from '../services/api-service'
import ValidationError from '../Validation/ValidationError'
import {CSVLink} from 'react-csv'
const uuidv4 = require('uuid/v4');

class UserList extends React.Component{
    constructor(){
    super()
        this.state={
            page:1,
            pageLimit:10,
            users:[],
            error:''
        }
    }
    callApi=(num)=>{
        this.setState({page:num})
        ApiService.getUser(num)
        .then(([users]) => {
          this.setState({ users: users.results })
      })
      .catch(error => {
          this.setState({ error:error.message });
      });
    }
    componentDidMount(){
          ApiService.getUser(this.state.page)
          .then(([users]) => {
            this.setState({ users: users.results })
        })
        .catch(error => {
            this.setState({ error:error.message });
        });
    }
    render(){
    let usersDisplayed=this.state.users.slice(0,10);
      return(
        <main className='userList'>
            <h2>User Directory</h2>
            <ValidationError errorMessage={this.state.error}/>
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
            <div className='buttonContainer'>
                <CSVLink className='button' id='exportButton' data={this.state.users.map(x=>({lastname:x.name.last, firstname:x.name.first,email:x.email,age:x.dob.age,gender:x.gender,largepicture:x.picture.large,mediumpicture:x.picture.medium,thumbnailpicture:x.picture.thumbnail}))}>Export Page {this.state.page} to CSV</CSVLink>
            </div>

        </main>
      )  
    }
}
export default withRouter(UserList)