import React, { Component } from 'react';
import Code from './components/Code'
import Chatbox from './components/Chatbox'
import safeEval from 'safe-eval'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      modifier: () => '',
      code: `/* Enter your global variables here */
/**
 * Enter your every-time code here.
 * This function will run every time when user performs some action.
 * You can remove "async" keyword if you don't have any await function inside this function
 */
function respond(inputText) {
  // BOT LOGIC GOES HERE
  // 'inputText' is the text entered
  // by the user speaking to your bot

  // When you are done, return a string
  // you want to send back to the user
  return upper(inputText);
}

const upper = text => text.toUpperCase();`
    }
  }

  setCode = (code) => {
    console.log('app.js -> ', this.state.code)
    this.setState({
      code
    })
  }

  setModifier = () => {
    const modifier = safeEval(`() => {${this.state.code};return respond}`)
    console.log(this.state.code)
    console.log('----------')
    console.log(modifier.toString())
    this.setState({
      modifier
    })
  }

  render() {
    return (
      <div className='Rectangle-container'>
        <button onClick={this.setModifier} className='ApplyChange-Button'>
          Apply Changes
        </button>
        <div
          className='Rectangle-code'
        >
          <Code
            setCode={this.setCode}
            code={this.state.code}
          />
        </div>
        
        <div
          className='Rectangle-chatbox'
        >
          <Chatbox
            modifier={this.state.modifier}
          />
        </div>
      </div>
    );
  }
}

export default App;
