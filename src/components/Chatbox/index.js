import React from 'react'
import MessageArea from '../MessageArea'
// import InputMessage from '../InputMessage'
import '../../App.css'

class Chatbox extends React.Component {
  render () {
    return (
      <div className='chatBox'>
        <MessageArea modifier={this.props.modifier} />
      </div>
    )
  }
}

export default Chatbox