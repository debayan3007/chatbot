import React from 'react'
import MessageArea from '../MessageArea'
import {connect} from 'react-redux'
import '../../App.css'
// Actions
import { addChat, updateMessage, updateMessageLoad } from '../../actions/index'
 
class Chatbox extends React.Component {
  render () {
    const {
      messages,
      addChat,
      messageText,
      updateMessage,
      code,
      modifier,
      messageLoading,
      updateMessageLoad,
    } = this.props
    return (
      <div className='chatBox'>
        <MessageArea
          modifier={modifier}
          messages={messages}
          addChat={addChat}
          messageText={messageText}
          code={code}
          updateMessage={updateMessage}
          messageLoading={messageLoading}
          updateMessageLoad={updateMessageLoad} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chats.messages,
  messageText: state.chats.messageText,
  code: state.code.code,
  messageLoading: state.chats.messageLoading,
})

const mapDispatchToProps = dispatch => ({
  addChat: text => dispatch(addChat(text)),
  updateMessage: text => dispatch(updateMessage(text)),
  updateMessageLoad: state => dispatch(updateMessageLoad(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox)