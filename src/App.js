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

const generationColor = {
  1: '#ff4d4d',
  2: '#ff8080',
  3: '#ffcccc',
  4: '#ff5c33',
  5: '#ff9980',
  6: '#ffc34d',
  7: '#ffe6b3',
  8: '#80ff80',
  9: '#80dfff',
  10: '#df80ff',
};

const generateEmptyGrid = () => {
  const rows = [];
  const cell = {
    state: 0,
    generation: 1,
    color: generationColor[1],
  };
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => cell));
  }
  return rows;
};

const generateRandomGrid = () => {
  const rows = [];
  const activeCell = {
    state: 1,
    generation: 1,
    color: generationColor[1],
  };
  const deadCell = {
    state: 0,
    generation: 1,
    color: 'undefined',
  };
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () =>
        Math.random() > 0.7 ? activeCell : deadCell
      )
    );
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
      gridCopy[rowIndex][colIndex].state =
        grid[rowIndex][colIndex].state === 0 ? 1 : 0;
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
                neighbors += currGrid[newRowIndex][newColIndex].state;
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[rowIndex][colIndex].state = 0;
            } else if (
              currGrid[rowIndex][colIndex].state === 0 &&
              neighbors === 3
            ) {
              const currGeneration =
                gridCopy[rowIndex][colIndex].generation + 1;
              const newColor =
                currGeneration <= 10 ? generationColor[currGeneration] : '#000';
              const newCell = {
                state: 1,
                generation: currGeneration,
                color: newColor,
              };
              gridCopy[rowIndex][colIndex] = newCell;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 700);
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
                  fontSize: '0.70rem',
                  textAlign: 'center',
                  width: 20,
                  height: 20,
                  backgroundColor: grid[rowIndex][colIndex].state
                    ? grid[rowIndex][colIndex].color
                    : undefined,
                  border: '1px solid black',
                }}
              >
                {grid[rowIndex][colIndex].state === 1
                  ? grid[rowIndex][colIndex].generation
                  : ''}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default App;
