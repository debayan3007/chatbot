import React, { Component } from 'react';
import Code from './components/Code'
import Chatbox from './components/Chatbox'
import './App.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='Rectangle-container'>
          <div
            className='Rectangle-code'
          >
            <Code />
          </div>
          
          <div
            className='Rectangle-chatbox'
          >
            <Chatbox />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
