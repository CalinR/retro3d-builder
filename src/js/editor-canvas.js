import React, { Component } from 'react'

export default class EditorCanvas extends Component {
  constructor(){
    super()
    this.state = {
      mouseX: 0,
      mouseY: 0,
      vertices: []
    }

    this.vertexSize = 8;
  }

  componentDidMount(){
    this.updateCanvas();
  }

  componentDidUpdate(){
    this.updateCanvas();
  }

  drawMousePointer(){
    const context = this.canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = '#f39c12';
    context.fillRect(this.props.x - this.vertexSize / 2, this.props.y - this.vertexSize / 2, this.vertexSize, this.vertexSize);
    context.closePath();
  }

  drawActiveSector(){
    const context = this.canvas.getContext('2d');
    context.beginPath();
    this.props.activeSector.vertices.forEach((item, index) => {
      if (index == 0){
        context.moveTo(item.x, item.y)
      }
      else {
        context.lineTo(item.x, item.y)
      }
    })
    const verticesLength = this.props.activeSector.vertices.length;
    if(verticesLength > 0){
      const lastVertex = this.props.activeSector.vertices[verticesLength-1];
      context.moveTo(lastVertex.x, lastVertex.y);
      context.lineTo(this.props.x, this.props.y);
    }
    context.strokeStyle = '#f39c12';
    context.stroke();
    context.closePath();
  }

  drawSectors(){
    const context = this.canvas.getContext('2d');
    
    this.props.sectors.forEach(sector => {
      context.beginPath();
      sector.vertices.forEach((vertex, index) => {
        if (index == 0){
          context.moveTo(vertex.x, vertex.y)
        }
        else {
          context.lineTo(vertex.x, vertex.y)
        }
      })
      context.fillStyle = 'rgba(255, 255, 255, 0.1)';
      context.fill();
      context.strokeStyle = '#fff';
      context.stroke();
      context.closePath();
    })
  }

  updateCanvas(){
    const context = this.canvas.getContext('2d');
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    this.drawMousePointer();
    this.drawActiveSector();
    this.drawSectors();
  }

  render(){
    return (
      <canvas className="foreground" width="2000" height="2000" ref={ canvas => {this.canvas = canvas} } />
    )
  }
}