import React, { Component } from 'react'
import BuilderControls from './builder-controls'
import BuilderView from './builder-view'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      sectors: [],
      activeTool: null,
      snap: false,
      info: false,
      gridSize: 32
    }
  }

  changeTool(tool){
    this.setState({
      activeTool: tool
    })
  }

  toggleSnap(){
    this.setState((state) => {
      return {
        snap: !state.snap
      }
    })
  }

  toggleInfo(){
    this.setState((state) => {
      return {
        info: !state.info
      }
    })
  }

  render(){
    const props = {
      changeTool: tool => this.changeTool(tool),
      toggleSnap: () => this.toggleSnap(),
      toggleInfo: () => this.toggleInfo(),
      snap: this.state.snap,
      info: this.state.info,
      activeTool: this.state.activeTool,
      gridSize: this.state.gridSize
    }

    return (
      <div className="builder-wrapper">
        <BuilderControls {...props} />
        <BuilderView {...props} />
      </div>
    )
  }
}