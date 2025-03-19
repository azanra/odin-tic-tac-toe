import { gameFlow } from "./gameFlow.js";
import { view } from "./view.js";

export const gameBoard = (function () {
  const row = 3;
  const col = 3;

  let gameBoard = [];

  let emptyCell = 9;

  const cellAmount = 9;

  const createGameBoard = () => {
    for (let i = 0; i < row; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < col; j++) {
        gameBoard[i][j] = "";
      }
    }
  };

  const resetEmptyCell = () => (emptyCell = 9);

  const resetGameBoard = () => (gameBoard = []);

  const returnCellAmount = () => cellAmount;

  const returnGameBoard = () => gameBoard;

  const returnEmptyCell = () => emptyCell;

  const decrementEmptyCell = () => emptyCell--;

  const placeDomMark = () => {
    let domArray = view.returnDomBoard();
    let counter = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        gameBoard[i][j] = domArray[counter];
        counter++;
      }
    }
    console.log(returnGameBoard());
    decrementEmptyCell();
    check();
    gameFlow.checkWin();
    gameFlow.checkTie();
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

  const diagonalCheck = () => {
    let firstDia = [];
    let secondDia = [];
    let firstCounter = 0;
    let secondCounter = 2;
    gameBoard.map((row) => {
      firstDia.push(row[firstCounter]);
      firstCounter++;
      secondDia.push(row[secondCounter]);
      secondCounter--;
    });
    checkMark(firstDia);
    checkMark(secondDia);
  };

  const check = () => {
    horizontalCheck();
    verticalCheck();
    diagonalCheck();
  };

  return {
    createGameBoard,
    returnGameBoard,
    returnEmptyCell,
    decrementEmptyCell,
    check,
    returnCellAmount,
    placeDomMark,
    resetGameBoard,
    resetEmptyCell,
  };
})();
