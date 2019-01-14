const initialState = {
  messages: [],
  messageText: '',
  messageLoading: false
}
const chats = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          action.text
        ]
      })
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        messageText: action.text
      })
    case 'MESSAGE_LADING':
      return Object.assign({}, state, {
        messageLoading: action.state
      })
    default:
      return state
  }
}

export default chats
