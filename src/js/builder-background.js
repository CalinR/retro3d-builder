import React, { Component } from 'react'

export default class BuilderBackground extends Component {
  constructor(){
    super();
    this.gridColor = '#2c3e50';
  }

  componentDidMount(){
    const context = this.canvas.getContext('2d');
    const width = this.canvas.width;
    const height = this.canvas.height;
    const columns = Math.round(width / this.props.gridSize);
    const rows = Math.round(height / this.props.gridSize);

    context.clearRect(0, 0, width, height);
    context.strokeStyle = this.gridColor;
    context.beginPath();
    for(let i=0; i<columns; i++){
      context.moveTo(i*this.props.gridSize, 0);
      context.lineTo(i*this.props.gridSize, this.canvas.height);
    }
    for(var i=0; i<rows; i++){
      context.moveTo(0, i*this.props.gridSize);
      context.lineTo(this.canvas.width, i*this.props.gridSize);
    }
    context.stroke();
    context.closePath();
  }

  render(){
    return (
      <canvas className="background" width={ this.props.width } height={ this.props.height } ref={ canvas => {this.canvas = canvas} } />
    )
  }
}