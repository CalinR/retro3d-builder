import React, { Component } from 'react'
import BuilderBackground from './builder-background'
import InfoContainer from './info-container'
import EditorCanvas from './editor-canvas';

export default class BuilderView extends Component {
  constructor(){
    super();
    this.state = {
      activeSector: {
        vertices: []
      },
      sectors: []
    }
  }

  componentDidMount(){
    const context = this.editor.canvas.getContext('2d');
    context.canvas.onmousemove = e => this.mouseMove(e);
    context.canvas.onmousedown = e => this.mouseClick(e);
  }

  mouseMove(e){
    let x = event.offsetX;
    let y = event.offsetY;

    if(this.props.snap){
      x = Math.round(x / this.props.gridSize) * this.props.gridSize;
      y = Math.round(y / this.props.gridSize) * this.props.gridSize
    }

    const snapToVertex = this.snapMouseToVertex(x, y);

    if(snapToVertex){
      x = snapToVertex.x;
      y = snapToVertex.y;
    }

    this.setState({
      mouseX: x,
      mouseY: y
    })
  }

  snapMouseToVertex(x, y){
    const snapRange = this.props.gridSize;

    for(let vertex of this.state.activeSector.vertices){
      if (x > vertex.x - snapRange && x < vertex.x + snapRange && y > vertex.y - snapRange && y < vertex.y + snapRange){
        return vertex
      }
    }

    for(let sector of this.state.sectors){
      for(let vertex of sector.vertices){
        if (x > vertex.x - snapRange && x < vertex.x + snapRange && y > vertex.y - snapRange && y < vertex.y + snapRange){
          return vertex
        }
      }
    }

    return null
  }

  mouseClick(e){
    const vertex = {
      x: this.state.mouseX,
      y: this.state.mouseY
    }
    const snapToVertex = this.snapMouseToVertex(this.state.mouseX, this.state.mouseY);
    let activeSector = {...this.state.activeSector}
    const vertices = [...this.state.activeSector.vertices, vertex];
    activeSector.vertices = vertices;
    let sectors = [...this.state.sectors];

    if (snapToVertex == activeSector.vertices[0]){
      const sector = {...activeSector}
      sectors = [...this.state.sectors, sector]
      activeSector.vertices = [];
    }

    this.setState({
      activeSector,
      sectors
    })
  }

  render(){
    return (
      <div className="builder-view">
        <BuilderBackground
          width="2000"
          height="2000"
          gridSize={ this.props.gridSize }
        />
        <EditorCanvas
          x={ this.state.mouseX }
          y={ this.state.mouseY }
          gridSize={ this.props.gridSize }
          snap={ this.props.snap }
          sectors={ this.state.sectors }
          activeSector={ this.state.activeSector } 
          ref={ canvas => {this.editor = canvas} }
        />
        <InfoContainer
          x={ this.state.mouseX }
          y={ this.state.mouseY }
          show={ this.props.info }
        />
      </div>
    )
  }
}