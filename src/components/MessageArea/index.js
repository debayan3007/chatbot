import React from 'react'
import safeEval from 'safe-eval'
import MessageBubble from '../MessageBubble'
import InputMessage from '../InputMessage'
import CampK12 from '../../lib/CampK12'

class MessageArea extends React.Component {
  sendMessage = (e) => {
    if (e.key === 'Enter') {
      let {
        messageText,
        code,
      } = this.props
      const respond = safeEval(code, {CampK12})
      let modifVal = respond(messageText)
      if (typeof modifVal === 'object') {
        this.props.updateMessageLoad(true)
        modifVal
          .then(text => {
            if (text.length === 0) {
              return
            }
            this.props.addChat(text.trim())
            this.props.updateMessageLoad(false)
          })
      } else {
        if (messageText.length > 0) {
          this.props.addChat(String(modifVal).trim())
        }
      }
      this.props.updateMessage('')
    }
  }

  typeMessage = (e) => {
    let text = e.target.value
    // if (text.length === 0) return
    this.props.updateMessage(text)
  }

  render () {
    let messageList = this.props.messages.map((el, i) => {
      return (
        <li key={i} style={{
          listStyleType: 'none'
        }}>
          <MessageBubble text={el}/>
        </li>
      )
    })

    if (this.props.messageLoading) {
      messageList.push(
        <li key={'load'} style={{
          listStyleType: 'none'
        }}>
          <MessageBubble text='...'/>
        </li>
      )
    }
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
          messageLoading={this.props.messageLoading}
        />
      </React.Fragment>
    )
  }
}

export default MessageArea
