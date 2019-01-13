import React from 'react'

const textStyle = {
  marginLeft: 30,
  height: 9,
  fontFamily: 'Quicksand',
  fontSize: 14,
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#d3d3d3',
}

const textBoxStyle = {
  height: 40,
  borderRadius: 8,
  backgroundColor: '#404040',
  textAlign: 'center',
  width: 300,
  
}

class MessageBody extends React.Component {
  render () {
    return (
      <React.Fragment>
        <img src={require('../../bot.png')}/>
        <div style={textBoxStyle}>
          <p style={textStyle}>
            {this.props.text}
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default MessageBody