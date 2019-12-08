import React from 'react';
import UserCard from './UserCard';
import '../App.css';
import ApiService from '../services/api-service';
import ValidationError from '../Validation/ValidationError';
import {CSVLink} from 'react-csv';
const uuidv4 = require('uuid/v4');

class UserList extends React.Component{
    constructor(){
    super()
        this.state={
            page:1,
            pageLimit:10,
            users:[],
            error:''
        };
    }
    callApi=(num)=>{
        this.setState({page:num})
        ApiService.getUser(num)
        .then(([users]) => {
          this.setState({ users: users.results });
      })
      .catch(error => {
          this.setState({ error:error.message });
      })
    }
    componentDidMount(){
          ApiService.getUser(this.state.page)
          .then(([users]) => {
            this.setState({ users: users.results });
        })
        .catch(error => {
            this.setState({ error:error.message });
        });
    }
    render(){
        const headers = [
            { label: "First Name", key: "first_name" },
            { label: "Last Name", key: "last_name" }, 
            { label: "Age", key: "age" },
            { label: "Phone", key: "phone" },
            { label: "Email", key: "email" },
            { label: "Gender", key: "gender" },
            { label: "Thumbnail Picture", key: "thumbnail_picture" },
            { label: "Medium Picture", key: "medium_picture" },
            { label: "Large Picture", key: "large_picture" }
          ];
        const data=this.state.users.map(x=>({
            first_name:x.name.first,
            last_name:x.name.last, 
            age:x.dob.age,
            phone:x.phone,
            email:x.email,
            gender:x.gender,
            large_picture:x.picture.large,
            medium_picture:x.picture.medium,
            thumbnail_picture:x.picture.thumbnail
            }));
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
                    <button 
                        aria-label='button for previous page of users'
                        className='button' 
                        type='button' 
                        onClick={()=>this.callApi(this.state.page-1)}>Back
                    </button>}
                {this.state.page===1 ? null: 
                    <button 
                        aria-label='button for previous page of users'
                        className='button' 
                        type='button' 
                        onClick={()=>this.callApi(this.state.page-1)}>{this.state.page-1}
                    </button>}

                    <button 
                    aria-label='current page of users'
                        className='button' 
                        id='currentPage' 
                        type='button'>{this.state.page}
                    </button>
                {this.state.page===1 ? null: 
                    <button 
                        aria-label='button for next page of users'
                        className='button' 
                        type='button' 
                        onClick={()=>this.callApi(this.state.page+1)}>{this.state.page+1}
                    </button>}

                    <button 
                        aria-label='button for next page of users'
                        className='button' 
                        type='button' 
                        onClick={()=>this.callApi(this.state.page+1)}>Next
                    </button>
            </div>
            <div className='buttonContainer'>
                <CSVLink 
                    aria-label='button for exporting current users on page to CSV file'
                    className='button' 
                    id='exportButton' 
                    data={data} 
                    headers={headers}>
                    Export Page {this.state.page} to CSV
                </CSVLink>
            </div>

        </main>
      )  
    }
}
export default UserList