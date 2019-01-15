import React, {Component} from 'react'
import MessageArea from '../MessageArea'
import {connect} from 'react-redux'
import '../../App.css'

import { addChat, updateMessage, updateMessageLoad, addOrigChat } from '../../actions/index'
 
class Chatbox extends Component {
  render () {
    const {
      messages,
      messagesOrig,
      addChat,
      messageText,
      updateMessage,
      code,
      modifier,
      messageLoading,
      updateMessageLoad,
      addOrigChat,
    } = this.props
    return (
      <div className='chatBox'>
        <MessageArea
          modifier={modifier}
          messages={messages}
          messagesOrig={messagesOrig}
          addChat={addChat}
          messageText={messageText}
          code={code}
          updateMessage={updateMessage}
          messageLoading={messageLoading}
          addOrigChat={addOrigChat}
          updateMessageLoad={updateMessageLoad} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chats.messages,
  messagesOrig: state.chats.messagesOrig,
  messageText: state.chats.messageText,
  code: state.code.code,
  messageLoading: state.chats.messageLoading,
})

const mapDispatchToProps = dispatch => ({
  addChat: text => dispatch(addChat(text)),
  updateMessage: text => dispatch(updateMessage(text)),
  updateMessageLoad: state => dispatch(updateMessageLoad(state)),
  addOrigChat: text => dispatch(addOrigChat(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox)