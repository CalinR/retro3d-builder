import React, { Component } from 'react'
import BuilderBackground from './builder-background'
import InfoContainer from './info-container'

export default class BuilderView extends Component {
  constructor(){
    super();
    this.state = {
      mouseX: 0,
      mouseY: 0
    }
    this.vertexSize = 8;
  }

  componentDidMount(){
    const context = this.foreground.getContext('2d');
    // window.requestAnimationFrame(() => this.updateCanvas());
    context.canvas.onmousemove = e => this.mouseMove(e);
    this.updateCanvas();
  }

  componentDidUpdate(){
    this.updateCanvas();
  }

  mouseMove(e){
    let x = event.offsetX;
    let y = event.offsetY;

    if(this.props.snap){
      x = Math.round(x / this.props.gridSize) * this.props.gridSize;
      y = Math.round(y / this.props.gridSize) * this.props.gridSize
    }

    this.setState({
      mouseX: x,
      mouseY: y
    })
  }

  updateMousePointer(){
    const context = this.foreground.getContext('2d');
    context.beginPath();
    context.fillStyle = '#f39c12';
    context.fillRect(this.state.mouseX - this.vertexSize / 2, this.state.mouseY - this.vertexSize / 2, this.vertexSize, this.vertexSize);
    context.closePath();
  }

  updateCanvas(){
    const context = this.foreground.getContext('2d');
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    this.updateMousePointer();
  }

  render(){
    return (
      <div className="builder-view">
        <BuilderBackground width="2000" height="2000" gridSize={ this.props.gridSize } />
        <canvas className="foreground" width="2000" height="2000" ref={ canvas => {this.foreground = canvas} } />
        <InfoContainer x={ this.state.mouseX } y={ this.state.mouseY } show={ this.props.info }/>
      </div>
    )
  }
}