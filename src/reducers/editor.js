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
          `file-${state.tabCount}`
        ],
        tabCount: state.tabCount + 1
      })
    default:
      return state
  }
}

export default chats
