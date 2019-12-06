import React from 'react'
import {withRouter} from 'react-router-dom'
import MediaQuery from 'react-responsive'

class UserCard extends React.Component{
    render(){
      return(
          <div className='userCard'>
             <ul>
                <li>{this.props.name.first} {this.props.name.last}</li>
                <li>{this.props.email}</li>
                <li>{this.props.phone}</li>
                <li>{this.props.age}</li>
                <li>{this.props.gender}</li>
             </ul>
             <MediaQuery maxWidth={760}>
                <div id='thumbnailContainer'>
                    <img src={this.props.picture.thumbnail} alt='headshot of user' id='thumbnail'/>
                </div>
             </MediaQuery>
             <MediaQuery minWidth={761} maxWidth={1023}>
                <img src={this.props.picture.medium} id='mediumImg' alt='headshot of user'/>
             </MediaQuery>
             <MediaQuery minWidth={1024}>
                <img src={this.props.picture.large} id='LargeImg' alt='headshot of user'/>
             </MediaQuery>
          </div>
      )  
    }
}
export default withRouter(UserCard)