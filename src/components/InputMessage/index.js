import React, {Component} from 'react'
import '../../App.css'

class InputMessage extends Component {
  render () {
    return (
      <input
        type='text'
        className='inputBox'
        onKeyPress={this.props.send}
        onChange={this.props.type}
        value={this.props.messageText}
      />
    )
  }
}

export default InputMessage