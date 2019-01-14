import React, { Component } from 'react'

import Editor from './components/Editor'
import Chatbox from './components/Chatbox'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './App.css'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='Rectangle-container'>
          <div className='Rectangle-code' >
            <Editor />
          </div>
          <div className='Rectangle-chatbox'>
            <Chatbox />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App

