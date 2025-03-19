import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";
import { view } from "./view.js";

export const gameFlow = (function () {
  let winStatus = false;

  const returnWinStatus = () => winStatus;

  const resetWinStatus = () => (winStatus = false);

  const updateWinStatus = () => (winStatus = !winStatus);

  const paraStatus = document.querySelector(".winStatus");

  const playRound = () => {
    gameBoard.createGameBoard();
    view.createColumn();
    view.domListener();
    view.displayDom();
    view.updatePlayerTurnPara(player.returnActivePlayer().playerName);
  };

  const checkWin = () => {
    if (winStatus === true) {
      paraStatus.textContent = `${view.returnCheckPlayer()} is winning the game`;
      view.resetText(paraStatus);
      reset();
    }
  };

  const checkTie = () => {
    if (winStatus === false && gameBoard.returnEmptyCell() === 0) {
      paraStatus.textContent = `The game result in a draw`;
      view.resetText(paraStatus);
      reset();
    }
  };

  const reset = () => {
    gameBoard.resetGameBoard();
    view.resetDomBoard();
    player.resetActivePlayer();
    resetWinStatus();
    gameBoard.resetEmptyCell();
    gameBoard.createGameBoard();
    view.displayDom();
    view.updatePlayerTurnPara(player.returnActivePlayer().playerName);
  };

  return {
    returnWinStatus,
    updateWinStatus,
    playRound,
    checkWin,
    reset,
    checkTie,
  };
})();
