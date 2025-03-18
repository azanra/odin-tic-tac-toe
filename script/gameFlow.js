import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";
import { view } from "./view.js";

export const gameFlow = (function () {
  let winStatus = false;

  const returnWinStatus = () => winStatus;

  const resetWinStatus = () => (winStatus = false);

  const updateWinStatus = () => (winStatus = !winStatus);

  const playRound = () => {
    gameBoard.createGameBoard();
    view.createColumn();
    view.domListener();
    view.displayDom();
  };

  const checkWin = () => {
    if (winStatus === true) {
      const paraStatus = document.querySelector(".winStatus");
      paraStatus.textContent = `${view.returnCheckPlayer()} is winning the game`;
      reset();
    }
  };

  const reset = () => {
    gameBoard.resetGameBoard();
    view.resetDomBoard();
    player.resetActivePlayer();
    resetWinStatus();
    gameBoard.createGameBoard();
    view.displayDom();
  };

  return { returnWinStatus, updateWinStatus, playRound, checkWin };
})();
