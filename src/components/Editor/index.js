import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Code from '../Code'

import { connect } from 'react-redux'
import { addTab } from '../../actions/index'
import {applyCode, updateCode} from '../../actions/index'
import refreshIcon from '../../refresh@2x.png'


import "react-tabs/style/react-tabs.css"


const buttonStyleEnabled = {
  width: 132,
  height: 24,
  borderRadius: 4,
  borderColor: '#66d68d',
  backgroundColor: '#66d68d',
  fontFamily: 'Quicksand',
  fontSize: 12,
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#ffffff',
}

const buttonStyleDisabled = {
  width: 132,
  height: 24,
  borderRadius: 4,
  borderColor: '#282828',
  backgroundColor: '#282828',
  fontFamily: 'Quicksand',
  fontSize: 12,
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#454545',
}

const refreshIconStyle = {
  width: 11,
  height: 12,
  objectFit: 'contain'
}

class Editor extends Component {
  onCodeChange = (newValue, e) => {
    this.props.updateCode(newValue)
    console.log(this.props.unsavedCode)

  }

  setModifier = () => {
    this.props.applyCode(this.props.codeText)
    console.log(this.props.unsavedCode)
  }

  render () {
    const {
      tabs,
      unsavedCode,
      addTab,
      codeText,
    } = this.props

    const tabComponents = tabs.map(tab => (
      <Tab>{tab}</Tab>
    ))

    const panelComponents = tabs.map(tab => (
      <TabPanel>
        <Code />
      </TabPanel>
    ))

    return (
      <div>
        <button
          onClick={this.setModifier}
          className='ApplyChange-Button'
          style={unsavedCode ? buttonStyleEnabled : buttonStyleDisabled}
        >
          <img style={refreshIconStyle} src={refreshIcon} alt={'refresh icon'}/>
          <span>Apply Changes</span>
        </button>
        <Tabs>
          <TabList>
            <Tab>
              main.js
            </Tab>
            {tabComponents}
            <button onClick={addTab}>+</button>
          </TabList>
      
          <TabPanel>
            <Code
              onCodeChange={this.onCodeChange}
              codeText={codeText}
            />
          </TabPanel>
          {panelComponents}
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs: state.editor.tabs,
  code: state.code.code,
  codeText: state.code.codeText,
  unsavedCode: state.code.unsavedCode
})

const mapDispatchToProps = dispatch => ({
  addTab: name => dispatch(addTab(name)),
  applyCode: text => dispatch(applyCode(text)),
  updateCode: text => dispatch(updateCode(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)