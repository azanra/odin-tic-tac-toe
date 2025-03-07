import { cell } from "./cell.js";

export const gameBoard = (function () {
  const row = 3;
  const col = 3;
  let gameBoard = [];
  let emptyCell = 9;

  const createGameBoard = () => {
    for (let i = 0; i < row; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < col; j++) {
        gameBoard[i].push(cell);
      }
    }
  };

  const returnGameBoard = () => gameBoard;

  const returnEmptyCell = () => emptyCell;

  const decrementEmptyCell = () => emptyCell--;

  const placeMark = (mark, inputRow, inputColumn) => {
    for (let currentRow = 0; currentRow < row; currentRow++) {
      if (currentRow === inputRow) {
        for (let currentColumn = 0; currentColumn < col; currentColumn++) {
          if (currentColumn === inputColumn) {
            gameBoard[currentRow][currentColumn].setValue(mark);
          }
        }
      }
    }
  };

  return {
    createGameBoard,
    returnGameBoard,
    returnEmptyCell,
    decrementEmptyCell,
    placeMark,
  };
})();
