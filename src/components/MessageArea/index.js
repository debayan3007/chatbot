import React from 'react'
import safeEval from 'safe-eval'
import MessageBubble from '../MessageBubble'
import InputMessage from '../InputMessage'
import CampK12 from '../../lib/CampK12'

class MessageArea extends React.Component {
  messagesEnd = React.createRef()

  componentDidMount () {
    this.scrollToBottom()
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  }

  sendMessage = (e) => {
    if (e.key === 'Enter') {
      let {
        messageText,
        code,
      } = this.props
      this.props.addOrigChat(messageText)
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
      this.scrollToBottom()
    }
  }

  typeMessage = (e) => {
    let text = e.target.value
    // if (text.length === 0) return
    this.props.updateMessage(text)
  }

  render () {
    const {
      messagesOrig,
      messageLoading,
      messageText,
    } = this.props
  
    let messageList = this.props.messages.map((el, i) => {
      return (
        <li key={i} style={{
          listStyleType: 'none'
        }}>
          <MessageBubble text={messagesOrig[i]} bot={true}/>
          <MessageBubble text={el}/>
        </li>
      )
    })

    if (messageLoading) {
      messageList.push(
        <li key={'load'} style={{
          listStyleType: 'none'
        }}>
          <MessageBubble text={messagesOrig[messagesOrig.length - 1]} bot={true}/>
          <MessageBubble text='...'/>
        </li>
      )
    }

    messageList.push(
      <li key={'scroller'} style={{
        listStyleType: 'none'
      }}>
        <span ref={this.messagesEnd} />
      </li>
    )

    return (
      <React.Fragment>
        <div className='chatArea'>
          <div>
            <ul>
              {messageList}
            </ul>
          </div>
        </div>
        <br />
        <InputMessage
          send={this.sendMessage}
          type={this.typeMessage}
          messageText={messageText}
          messageLoading={messageLoading}
        />
      </React.Fragment>
    )
  }
}

export default MessageArea
