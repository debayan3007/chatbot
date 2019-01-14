import React, {Component} from 'react';
import MonacoEditor from 'react-monaco-editor';

class Code extends Component {
  editorDidMount(editor, monaco) {
    editor.focus();
  }

  render() {
    const {codeText = ''} = this.props
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoEditor
          width="600" 
          height="90vh"
          language="javascript"
          theme="vs-dark"
          value={codeText}
          options={options}
          onChange={this.props.onCodeChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default Code