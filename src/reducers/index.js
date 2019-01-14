import { combineReducers } from 'redux'
import chats from './chats'
import code from './code'
import editor from './editor'

export default combineReducers({
  chats,
  code,
  editor,
})