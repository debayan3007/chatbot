export const addChat = text => ({
  type: 'ADD_CHAT',
  text,
})

export const updateMessage = text => ({
  type: 'UPDATE_MESSAGE',
  text
})

export const applyCode = text => ({
  type: 'APPLY_CODE',
  text
})

export const updateCode = text => ({
  type: 'UPDATE_CODE',
  text
})

export const updateMessageLoad = state => ({
  type: 'MESSAGE_LADING',
  state
})

export const addTab = name => ({
  type: 'ADD_TAB',
  name
})