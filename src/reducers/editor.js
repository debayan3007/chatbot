const initialState = {
  tabs: [],
  tabCount: 1
}

const chats = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return Object.assign({}, state, {
        tabs: [
          ...state.tabs,
          `file-${state.tabCount}.js`
        ],
        tabCount: state.tabCount + 1
      })
    case 'DELETE_TAB':
      return Object.assign({}, state, {
        tabs: [...state.tabs].filter(el => {
          if (el === action.name) {
            return false
          } else {
            return true
          }
        }),
        // tabs: []
      })
    default:
      return state
  }
}

export default chats
