import React from 'react'
import {withRouter} from 'react-router-dom'
import UserCard from './UserCard'
import config from './config'
const uuidv4 = require('uuid/v4');
class UserList extends React.Component{
    constructor(){
    super()
        this.state={
            page:1,
            pageLimit:10,
            users:[{
                dob: {date: "1972-10-17T00:22:20.641Z", age: 47},
            email:"volker.osterloh@example.com",
            gender:'male',
            name:{
                first: "Volker",
                last: "Osterloh",
                title: "Mr"
            },
            phone:"0779-4378141",
            picture:{
                large: "https://randomuser.me/api/portraits/men/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
            }
        },
        {dob: {date: "1973-01-28T23:25:20.190Z", age: 46},
            email:"mikkel.hansen@example.com",
            gender:'male',
            name:{title: "Mr", first: "Mikkel", last: "Hansen"
            },
            phone:"45957464",
            picture:{large: "https://randomuser.me/api/portraits/men/30.jpg", medium: "https://randomuser.me/api/portraits/med/men/30.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"}
        },
        {
            dob: {date: "1983-04-08T17:37:53.172Z", age: 36},
            email:"diego.lorenzo@example.com",
            gender:'male',
            name:{title: "Mr", first: "Diego", last: "Lorenzo"},
            phone:"902-070-690",
            picture:{large: "https://randomuser.me/api/portraits/men/76.jpg", medium: "https://randomuser.me/api/portraits/med/men/76.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg"}
        },{dob: {date: "1972-10-17T00:22:20.641Z", age: 47},
            email: "alexandra.morel@example.com",
            gender:'female',
            name:{title: "Ms", first: "Alexandra", last: "Morel"},
            phone:"05-41-55-67-75",
            picture:{large: "https://randomuser.me/api/portraits/women/64.jpg", medium: "https://randomuser.me/api/portraits/med/women/64.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg"}
        },{
            dob: {date: "1963-04-14T22:09:01.602Z", age: 56},
            email:"volker.osterloh@example.com",
            gender:'male',
            name:{
                first: "Volker",
                last: "Osterloh",
                title: "Mr"
            },
            phone:"0779-4378141",
            picture:{
                large: "https://randomuser.me/api/portraits/men/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
            }
        },
        {
            dob: {date: "1963-04-14T22:09:01.602Z", age: 56},
            email:"mikkel.hansen@example.com",
            gender:'male',
            name:{title: "Mr", first: "Mikkel", last: "Hansen"
            },
            phone:"45957464",
            picture:{large: "https://randomuser.me/api/portraits/men/30.jpg", medium: "https://randomuser.me/api/portraits/med/men/30.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"}
        },
        {
            dob: {date: "1963-04-14T22:09:01.602Z", age: 56},
            email:"diego.lorenzo@example.com",
            gender:'male',
            name:{title: "Mr", first: "Diego", last: "Lorenzo"},
            phone:"902-070-690",
            picture:{large: "https://randomuser.me/api/portraits/men/76.jpg", medium: "https://randomuser.me/api/portraits/med/men/76.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg"}
        },{
            dob: {date: "1963-04-14T22:09:01.602Z", age: 56},
            email: "alexandra.morel@example.com",
            gender:'female',
            name:{title: "Ms", first: "Alexandra", last: "Morel"},
            phone:"05-41-55-67-75",
            picture:{large: "https://randomuser.me/api/portraits/women/64.jpg", medium: "https://randomuser.me/api/portraits/med/women/64.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg"}
        }, {
            dob: {date: "1985-06-17T11:53:36.535Z", age: 34},
            email:"diego.lorenzo@example.com",
            gender:'male',
            name:{title: "Mr", first: "Diego", last: "Lorenzo"},
            phone:"902-070-690",
            picture:{large: "https://randomuser.me/api/portraits/men/76.jpg", medium: "https://randomuser.me/api/portraits/med/men/76.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg"}
        },{
            dob: {date: "1985-06-17T11:53:36.535Z", age: 34},
            email: "alexandra.morel@example.com",
            gender:'female',
            name:{title: "Ms", first: "Alexandra", last: "Morel"},
            phone:"05-41-55-67-75",
            picture:{large: "https://randomuser.me/api/portraits/women/64.jpg", medium: "https://randomuser.me/api/portraits/med/women/64.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg"}
        }]
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
        console.log(this.state.users[0].dob.age)
        console.log(this.state)
      return(
          <div className='userList'>
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
            {this.state.page===1?null: <button className='button' type='button' onClick={()=>this.setState({page:this.state.page-1})}>Back</button>}
            {this.state.page===1?null: <button className='button' type='button'>{this.state.page-1}</button>}
            <button className='button' type='button'>{this.state.page}</button>
            <button className='button' type='button'>{this.state.page+1}</button>
      <button type='button' onClick={()=>this.setState({page:this.state.page+1})}>Next</button>

          </div>
      )  
    }
}
export default withRouter(UserList)