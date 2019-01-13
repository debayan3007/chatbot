import React from 'react'
import safeEval from 'safe-eval'
import MessageBody from '../MessageBody'
import InputMessage from '../InputMessage'

class MessageArea extends React.Component {
  sendMessage = (e) => {
    if (e.key === 'Enter') {
      let {
        messageText,
        code,
      } = this.props
      const respond = safeEval(code)
      this.props.addChat(respond(messageText))
      this.props.updateMessage('')
    }
  }

  typeMessage = (e) => {
    let text = e.target.value.trim()
    if (text.length === 0) return
    console.log('text --> ', text)
    console.log(this.props)
    this.props.updateMessage(text)
  }

  render () {
    let messageList = this.props.messages.map((el, i) => {
      return (
        <li key={i} style={{
          listStyleType: 'none'
        }}>
          <MessageBody text={el}/>
        </li>
      )
    })
    return (
      <React.Fragment>
        <div className='chatArea'>
          <ul>
            {messageList}
          </ul>
        </div>
        <br />
        <InputMessage
          send={this.sendMessage}
          type={this.typeMessage}
          messageText={this.props.messageText}
        />
      </React.Fragment>
    )
  }
}

export default MessageArea
