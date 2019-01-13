import { combineReducers } from 'redux'
import chats from './chats'
import code from './code'

export default combineReducers({
  chats,
  code
})