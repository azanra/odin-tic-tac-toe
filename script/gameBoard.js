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
            decrementEmptyCell();
          }
        }
      }
    }
  };

  const allFirstPlayerMark = (item) => item === "X";
  const allSecondPlayerMark = (item) => item === "O";

  const checkMark = (checkArr) => {
    if (
      checkArr.every(allFirstPlayerMark) === true ||
      checkArr.every(allSecondPlayerMark) === true
    ) {
      gameFlow.updateWinStatus();
      console.log(gameFlow.returnWinStatus());
    }
  };

  const horizontalCheck = () => {
    gameBoard.map((row) => {
      checkMark(row);
    });
  };

  const verticalCheck = () => {
    let firstCol = [];
    let secondCol = [];
    let thirdCol = [];
    gameBoard.map((row) => {
      firstCol.push(row[0]);
      secondCol.push(row[1]);
      thirdCol.push(row[2]);
    });
    checkMark(firstCol);
    checkMark(secondCol);
    checkMark(thirdCol);
  };

  return {
    createGameBoard,
    returnGameBoard,
    returnEmptyCell,
    decrementEmptyCell,
    placeMark,
    horizontalCheck,
    verticalCheck,
  };
})();
