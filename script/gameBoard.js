export const gameBoard = (function () {
  const row = 3;
  const col = 3;
  let gameBoard = [];
  let emptyCell = 9;

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

  const placeMark = (mark, inputRow, inputCol) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (i === inputRow && j === inputCol) {
          gameBoard[i][j] = mark;
          decrementEmptyCell();
          console.log(returnEmptyCell());
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
