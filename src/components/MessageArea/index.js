import React from 'react'
import MessageBody from '../MessageBody'
import InputMessage from '../InputMessage'

class MessageArea extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      messageText: '',
      // modifier: text => text.toUpperCase()
    }
  }

  sendMessage = (e) => {
    if (e.key === 'Enter') {
      console.log('pressed enter --> ', this.state.messageText)
      let { messages, messageText} = this.state
      messages = messages.slice()
      const respond = this.props.modifier()
      messageText = respond(messageText)
      console.log('respond --> ', respond)
      console.log('messageText --> ', messageText)
      messages.push(messageText)
      this.setState({
        messages,
        messageText: ''
      })
    }
  }

  typeMessage = (e) => {
    let text = e.target.value.trim()
    if (text.length === 0) return
    console.log('text --> ', text)

    this.setState({
      messageText: text
    })

  }

  render () {
    let messageList = this.state.messages.map((el, i) => {
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
          messageText={this.state.messageText}
        />
      </React.Fragment>
    )
  }
}

export default MessageArea
