import { gameBoard } from "./gameBoard.js";

export const view = (function () {
  const cellAmount = gameBoard.returnCellAmount();

  const createColumn = () => {
    const gameBoardContainer = document.querySelector(".gameBoard");
    for (let i = 0; i < cellAmount; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", `cell-${i}`);
      gameBoardContainer.append(cell);
    }
  };

  const storeGameBoard = () => {
    let arrayBoard = [];
    const currentBoard = gameBoard.returnGameBoard();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        arrayBoard.push(currentBoard[i][j]);
      }
    }
    return arrayBoard;
  };

  return { createColumn, storeGameBoard };
})();
