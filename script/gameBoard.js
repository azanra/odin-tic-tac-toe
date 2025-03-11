import { cell } from "./cell.js";
import { gameFlow } from "./gameFlow.js";

export const gameBoard = (function () {
  const row = 3;
  const col = 3;

  let gameBoard = [];

  let emptyCell = 9;

  //array to check the mark
  let markCheck = [];

  const createGameBoard = () => {
    for (let i = 0; i < row; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < col; j++) {
        gameBoard[i][j] = "";
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
            gameBoard[currentRow][currentColumn] = mark;
          }
        }
      }
    }
  };

  //if every item in the array match the first item
  const ifMatch = (item) => item === markCheck[0][0];

  const checkMark = () => {
    //first item is not empty string
    if (markCheck[0][0] === "X" || markCheck[0][0] === "O") {
      if (markCheck[0].every(ifMatch) === true) {
        gameFlow.updateWinStatus();
        console.log(gameFlow.returnWinStatus());
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
