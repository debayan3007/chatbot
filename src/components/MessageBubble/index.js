import React, { Component } from 'react'
import '../../App.css'
import bot3 from '../../bot@3x.png'
import user from '../../user.png'

class MessageBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.bot ? 'bot' : 'user'}
        >
          {!this.props.bot ? <img src={user} alt={'user'} className='chatImg' /> : null}
          <div className='chatText'>
            {this.props.text}
          </div>
          {this.props.bot ? <img src={bot3} alt={'bot'} className='chatImg' /> : null}
        </div>
      </React.Fragment>
    )
  }
}

export default MessageBody
