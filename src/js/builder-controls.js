import React, { Component } from 'react'

export default class BuilderControls extends Component {
  render(){
    return (
      <div className="builder-controls">
        <div className="button-group">
          <button className={`move-btn ui-btn ${ this.props.activeTool == 'move' ? 'active' : '' }`} onClick={ () => this.props.changeTool('move') }>
            <i className="fas fa-arrows-alt"></i>
            <span className="btn-text">Move</span>
          </button>
          <button className={`wall-btn ui-btn ${ this.props.activeTool == 'wall' ? 'active' : '' }`} onClick={ () => this.props.changeTool('wall') }>
            <i className="fas fa-vector-square"></i>
            <span className="btn-text">Wall</span>
          </button>
        </div>
        <div className="button-group">
          <button className={`snap-btn ui-btn ${ this.props.snap ? 'active' : '' }`} onClick={ () => this.props.toggleSnap() }>
            <i className="fas fa-th-large"></i>
            <span className="btn-text">Snap</span>
          </button>
        </div>
      </div>
    )
  }
}