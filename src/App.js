import React, { useCallback, useState, useRef } from 'react';
import produce from 'immer';

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [0, -1],
  [1, 0],
  [1, -1],
  [-1, 0],
  [-1, 1],
  [-1, -1],
  [1, 1],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const generateRandomGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
  }
  return rows;
};

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);

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

  const handleGameRunning = () => {
    setRunning(!running);

    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((currGrid) => {
      return produce(currGrid, (gridCopy) => {
        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
          for (let colIndex = 0; colIndex < numCols; colIndex++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newRowIndex = rowIndex + x;
              const newColIndex = colIndex + y;

              if (
                newRowIndex >= 0 &&
                newRowIndex < numRows &&
                newColIndex >= 0 &&
                newColIndex < numCols
              ) {
                neighbors += currGrid[newRowIndex][newColIndex];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[rowIndex][colIndex] = 0;
            } else if (currGrid[rowIndex][colIndex] === 0 && neighbors === 3) {
              gridCopy[rowIndex][colIndex] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <>
      <button onClick={handleGameRunning}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={() => setGrid(generateEmptyGrid())}>Clear</button>
      <button onClick={() => setGrid(generateRandomGrid())}>Random</button>
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
                  backgroundColor: grid[rowIndex][colIndex]
                    ? 'pink'
                    : undefined,
                  border: '1px solid black',
                }}
              ></div>
            );
          })
        )}
      </div>
    </>
  );
};

export default App;
