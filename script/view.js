import { gameBoard } from "./gameBoard.js";

export const view = (function () {
  const createColumn = () => {
    const gameBoardContainer = document.querySelector(".gameBoard");
    const cellAmount = gameBoard.returnCellAmount();

    for (let i = 0; i < cellAmount; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", `column-${i}`);
      gameBoardContainer.append(cell);
    }
  };

  return { createColumn };
})();
