import React from 'react'
import MediaQuery from 'react-responsive'

class UserCard extends React.Component{
   static defaultProps={
      age: 53,
      email: "louane.vidal@example.com",
      gender: "female",
      name: {title: "Miss", first: "Louane", last: "Vidal"},
      phone: "02-62-35-18-98",
      picture:{
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"}
   };
   state={hidden:true}
   render(){
      return(
         <section className='userCard'>
            {this.state.hidden===true
              ?<button  
                  type='button' 
                  onClick={()=>{this.setState({hidden:false})}} 
                  className='userNameButton'>
                  {this.props.name.first} {this.props.name.last}
               </button>
               :null}
            {this.state.hidden===false
               ?<ul className={this.state.ulClassName}>
                  <li 
                     className='userName' 
                     onClick={()=>{this.setState({hidden:true})}}>
                     {this.props.name.first} {this.props.name.last}
                  </li>
                  <MediaQuery maxWidth={760}>
                     <div className='thumbnailContainer'>
                        <img 
                           src={this.props.picture.thumbnail} 
                           alt='headshot of user' 
                           className='thumbnail'/>
                     </div>
                  </MediaQuery>
                  <li>{this.props.age}</li>
                  <li>{this.props.gender}</li> 
                  <li>{this.props.phone}</li>
                  <li>{this.props.email}</li>  
               </ul>
               :null}
               <MediaQuery minWidth={761} maxWidth={1023}>
                  <div className='mediumImgContainer'>
                     <img 
                        src={this.props.picture.medium} 
                        className='mediumImg' 
                        alt='headshot of user'/>
                  </div>
               </MediaQuery>
               <MediaQuery minWidth={1024}>
                  <img 
                     src={this.props.picture.large} 
                     className='LargeImg' 
                     alt='headshot of user'/>
               </MediaQuery>
         </section>
      )  
   }
}
export default UserCard