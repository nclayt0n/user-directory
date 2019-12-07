import React from 'react'
import {withRouter} from 'react-router-dom'
import MediaQuery from 'react-responsive'

class UserCard extends React.Component{
    render(){
      return(
          <section className='userCard'>
             <ul>
                <li className='userName'>{this.props.name.first} {this.props.name.last}</li>
                <MediaQuery maxWidth={760}>
                  <div className='thumbnailContainer'>
                     <img src={this.props.picture.thumbnail} alt='headshot of user' className='thumbnail'/>
                  </div>
               </MediaQuery>
               <li>{this.props.age}</li>
               <li>{this.props.gender}</li> 
               <li>{this.props.phone}</li>
               <li>{this.props.email}</li>  
             </ul>
             <MediaQuery minWidth={761} maxWidth={1023}>
                <div className='mediumImgContainer'>
                    <img src={this.props.picture.medium} className='mediumImg' alt='headshot of user'/>
                </div>
             </MediaQuery>
             <MediaQuery minWidth={1024}>
                <img src={this.props.picture.large} className='LargeImg' alt='headshot of user'/>
             </MediaQuery>
          </section>
      )  
    }
}
export default withRouter(UserCard)