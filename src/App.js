import React, { useState } from 'react';
import produce from 'immer';

const numRows = 50;
const numCols = 50;

const App = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols}, 20px)`,
  };

  const handleCellClick = (rowIndex, colIndex) => {
    const newGrid = produce(grid, (gridCopy) => {
      gridCopy[rowIndex][colIndex] = grid[rowIndex][colIndex] === 0 ? 1 : 0;
    });
    setGrid(newGrid);
  };

  return (
    <div style={gridStyle}>
      {grid.map((rows, rowIndex) =>
        rows.map((cols, colIndex) => {
          return (
            <div
              onClick={() => handleCellClick(rowIndex, colIndex)}
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[rowIndex][colIndex] ? 'pink' : undefined,
                border: '1px solid black',
              }}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default App;
