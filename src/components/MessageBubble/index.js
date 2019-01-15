import React, { Component } from 'react'
import '../../App.css'

class MessageBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='user'>
          <img src={require('../../bot@3x.png')} alt={'bot'} className='chatImg' />
          <div className='chatText'>
            {this.props.text}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MessageBody