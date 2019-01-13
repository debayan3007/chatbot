import React from 'react'
import MessageArea from '../MessageArea'
import {connect} from 'react-redux'
import '../../App.css'
// Actions
import { addChat, updateMessage } from '../../actions/index'
 
class Chatbox extends React.Component {
  render () {
    const {
      messages,
      addChat,
      messageText,
      updateMessage,
    } = this.props
    return (
      <div className='chatBox'>
        <MessageArea
          modifier={this.props.modifier}
          messages={messages}
          addChat={addChat}
          messageText={messageText}
          code={this.props.code}
          updateMessage={updateMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chats.messages,
  messageText: state.chats.messageText,
  code: state.code.code
})

const mapDispatchToProps = dispatch => ({
  addChat: text => dispatch(addChat(text)),
  updateMessage: text => dispatch(updateMessage(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox)