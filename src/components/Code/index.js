import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import {connect} from 'react-redux'

import {applyCode, updateCode} from '../../actions/index'


class Code extends React.Component {
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange = (newValue, e) => {
    this.props.updateCode(newValue)
  }

  setModifier = () => {
    const modifier = `() => {${this.props.codeText};return respond}`
    this.props.applyCode(modifier)
  }

  render() {
    const code = this.props.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <button
          onClick={this.setModifier}
          className='ApplyChange-Button'
        >
          Apply Changes
        </button>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  code: state.code.code,
  codeText: state.chats.codeText,
})

const mapDispatchToProps = dispatch => ({
  applyCode: text => dispatch(applyCode(text)),
  updateCode: text => dispatch(updateCode(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Code)