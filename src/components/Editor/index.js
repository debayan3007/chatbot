import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Code from '../Code'

import { connect } from 'react-redux'
import {applyCode, updateCode, deleteTab, addTab } from '../../actions/index'
import refreshIcon from '../../refresh@3x.png'
import addButton from '../../shape.svg'


import "react-tabs/style/react-tabs.css"

const refreshIconStyle = {
  width: 11,
  height: 12,
  objectFit: 'contain',
  outline: 'none',
  float: 'left',
}

const tabStyle = {
  width: 72,
  height: 22,
  borderRadius: 2,
  backgroundColor: '#161616',
  fontFamily: 'Quicksand',
  fontSize: 14,
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#c6c6c6',
  outline: 'none',
}

const addTabStyle = {
  width: 10,
  height: 10,
  marginTop: 10,
  objectFit: 'contain',
  backgroundColor: '#161616',
  borderColor: '#161616',
  outline: 'none',
}

const addButtonPng = {
  width: 8,
  height: 8,
  objectFit: 'contain',
}


class Editor extends Component {
  constructor () {
    super()
    this.state = {
      show: null
    }
  }

  onCodeChange = (newValue, e) => {
    this.props.updateCode(newValue)
    console.log(this.props.unsavedCode)

  }

  setModifier = () => {
    this.props.applyCode(this.props.codeText)
    console.log(this.props.unsavedCode)
  }

  showCloseButton = (i) => {
    this.setState({
      show: i
    })
  }

  hideCloseButton = (i) => {
    this.setState({
      show: null
    })
  }

  closeTab = (tab) => {
    this.props.deleteTab(tab)
  }

  render () {
    const {
      tabs,
      unsavedCode,
      addTab,
      codeText,
    } = this.props

    const tabComponents = tabs.map((tab, i) => (
      <Tab
        style={tabStyle}
        key={i}
        onMouseEnter={this.showCloseButton.bind(this, i)}
        onMouseLeave={this.hideCloseButton}
      >
        {tab}
        {this.state.show === i && <span
          style={{ float: 'right' }}
          onClick={this.closeTab.bind(this, tab)}
        >x</span>}
      </Tab>
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
          // className='ApplyChange-Button'
          className={unsavedCode ? 'ApplyChange-Button-Enabled' : 'ApplyChange-Button-Disabled'}
        >
          <img style={refreshIconStyle} src={refreshIcon} alt={'refresh icon'}/>
          <span>Apply Changes</span>
        </button>
        <Tabs>
          <TabList>
            <Tab style={tabStyle}>
              main.js
            </Tab>
            {tabComponents}
            <button onClick={addTab} style={addTabStyle}>
              <img src={addButton} alt={'add'} style={addButtonPng}/>
            </button>
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
  unsavedCode: state.code.unsavedCode,
})

const mapDispatchToProps = dispatch => ({
  addTab: name => dispatch(addTab(name)),
  applyCode: text => dispatch(applyCode(text)),
  updateCode: text => dispatch(updateCode(text)),
  deleteTab: text => dispatch(deleteTab(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)