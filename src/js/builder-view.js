import React, { Component } from 'react'
import BuilderBackground from './builder-background'

export default class BuilderView extends Component {
  constructor(){
    super();
    this.mouse = {
      x: 0,
      y: 0
    }
  }

  componentDidMount(){
    window.requestAnimationFrame(() => this.updateCanvas());
    this.foreground.onmousemove = e => this.mouseMove(e);
    document.querySelector('.builder-view').onscroll = e => this.mouseMove(e);
  }

  mouseMove(e){
    const x = event.offsetX;
    const y = event.offsetY;
    this.mouse = {x,y}
  }

  updateCanvas(){
    const context = this.foreground.getContext('2d');
    context.clearRect(0,0,this.foreground.width,this.foreground.height);
    context.beginPath();
    context.fillStyle = '#f39c12';
    context.fillRect(this.mouse.x - 4, this.mouse.y - 4, 8, 8);
    context.closePath();
    window.requestAnimationFrame(() => this.updateCanvas());
  }

  render(){
    return (
      <div className="builder-view">
        <BuilderBackground width="2000" height="2000" gridSize={ this.props.gridSize } />
        <canvas className="foreground" width="2000" height="2000" ref={ canvas => {this.foreground = canvas} } />
      </div>
    )
  }
}