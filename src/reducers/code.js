const init = `/* Enter your global variables here */
/**
 * Enter your every-time code here.
 * This function will run every time when user performs some action.
 * You can remove "async" keyword if you don't have any await function inside this function
 */
function respond(inputText) {
  // BOT LOGIC GOES HERE
  // 'inputText' is the text entered
  // by the user speaking to your bot

  // When you are done, return a string
  // you want to send back to the user
  return CampK12.translate('bengali', inputText);
}

const upper = text => text.toUpperCase();

`

const initialState = {
    code: init,
    codeText: init
  }
  const code = (state = initialState, action) => {
    switch (action.type) {
      case 'APPLY_CODE':
        return Object.assign({}, state, {
          code: action.text
        })
      case 'UPDATE_CODE':
        return Object.assign({}, state, {
          codeText: action.text
        })
      default:
        return state
    }
  }
  
  export default code
  