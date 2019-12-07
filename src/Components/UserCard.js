import React from 'react'
import {withRouter} from 'react-router-dom'
import MediaQuery from 'react-responsive'

class UserCard extends React.Component{
    render(){
      return(
          <section className='userCard'>
             <ul>
                <li id='userName'>{this.props.name.first} {this.props.name.last}</li>
                <MediaQuery maxWidth={760}>
                  <div id='thumbnailContainer'>
                     <img src={this.props.picture.thumbnail} alt='headshot of user' id='thumbnail'/>
                  </div>
               </MediaQuery>
               <li>{this.props.age}</li>
               <li>{this.props.gender}</li> 
               <li>{this.props.phone}</li>
               <li>{this.props.email}</li>  
             </ul>
             <MediaQuery minWidth={761} maxWidth={1023}>
                <div id='mediumImgContainer'>
                    <img src={this.props.picture.medium} id='mediumImg' alt='headshot of user'/>
                </div>
             </MediaQuery>
             <MediaQuery minWidth={1024}>
                <img src={this.props.picture.large} id='LargeImg' alt='headshot of user'/>
             </MediaQuery>
          </section>
      )  
    }
}
export default withRouter(UserCard)