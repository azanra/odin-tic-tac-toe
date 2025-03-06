export const gameBoard = (function () {
  const row = 3;
  const col = 3;
  let gameBoard = [];
  const createGameBoard = () => {
    for (let i = 0; i < row; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < col; j++) {
        gameBoard[i][j] = "";
      }
    }
  };
  const returnGameBoard = () => gameBoard;
  return { createGameBoard, returnGameBoard };
})();
