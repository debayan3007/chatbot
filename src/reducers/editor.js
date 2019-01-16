const initialState = {
  tabs: [],
  tabCount: 1,
  tabCode: {}
}

const chats = (state = initialState, action) => {
  let tabCode = {
    ...state.tabCode
  }
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
      delete tabCode[action.name]
      return Object.assign({}, state, {
        tabs: [...state.tabs].filter(el => {
          if (el === action.name) {
            return false
          } else {
            return true
          }
        }),
        tabCode,
      })
    case 'UPDATE_CODE_TABS':
      tabCode[action.name] = action.text
      return Object.assign({}, state, {
        tabCode,
      })
    default:
      return state
  }
}

export default chats
