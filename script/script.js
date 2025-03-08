import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

gameBoard.createGameBoard();
console.log(gameBoard.returnGameBoard());
gameBoard.placeMark("x", 1, 1);
console.log(gameBoard.returnGameBoard());
console.log(player.returnActivePlayer());
