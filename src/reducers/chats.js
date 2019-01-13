const initialState = {
  messages: [],
  messageText: ''
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
    default:
      return state
  }
}

export default chats
