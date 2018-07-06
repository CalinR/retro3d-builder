const gridSize = 32;
const gridColor = '#2c3e50';
const gridContext = document.querySelector('.grid').getContext('2d');

const update = () => {
  window.requestAnimationFrame(update);
}

const drawGrid = () => {
  const columns = Math.round(gridContext.canvas.width / gridSize);
  const rows = Math.round(gridContext.canvas.height / gridSize);

  gridContext.clearRect(0,0,gridContext.canvas.width,gridContext.canvas.height);
  gridContext.strokeStyle = gridColor;

  gridContext.beginPath();
  for(var i=0; i<columns; i++){
    gridContext.moveTo(i*gridSize, 0);
    gridContext.lineTo(i*gridSize, gridContext.canvas.height);
  }
  for(var i=0; i<rows; i++){
    gridContext.moveTo(0, i*gridSize);
    gridContext.lineTo(gridContext.canvas.width, i*gridSize);
  }
  gridContext.stroke();
  gridContext.closePath();
}

drawGrid();
window.requestAnimationFrame(update);