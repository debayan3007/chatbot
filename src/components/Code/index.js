import React from 'react';
import MonacoEditor from 'react-monaco-editor';
class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `/* Enter your global variables here */
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
        return upper(inputText);
      }
      
      const upper = text => text.toUpperCase();
      `,
    }
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange = (newValue, e) => {
    // console.log('onChange', newValue, e);
    // console.log('onchange -> ', this.state.code)
    // this.props.setCode(this.state)
    // this.setState({
    //   code: newValue,
    // })
    this.props.setCode(newValue)
  }

  render() {
    const code = this.props.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="600" 
        height="90vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default Code