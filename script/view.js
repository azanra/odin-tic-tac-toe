import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

export const view = (function () {
  const cellAmount = gameBoard.returnCellAmount();

  const createColumn = () => {
    const gameBoardContainer = document.querySelector(".gameBoard");
    for (let i = 0; i < cellAmount; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", `cell-${i} cells`);
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

  const displayDom = () => {
    const gameBoard = storeGameBoard();
    for (let i = 0; i < 9; i++) {
      const currentCell = document.querySelector(`.cell-${i}`);
      currentCell.textContent = gameBoard[i];
    }
  };

  const domListener = () => {
    const cells = document.querySelectorAll(".cells");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        domEvent(cell);
      });
    });
  };

  const domEvent = (cell) => {
    if (cell.textContent === "") {
      cell.textContent = player.returnActivePlayer().playerMark;
      player.switchTurn();
    }
  };

  return { createColumn, displayDom, domListener };
})();
