export const player = (function () {
  let player = [
    {
      playerName: "First Player",
      playerMark: "X",
    },
    {
      playerName: "Second Player",
      playerMark: "O",
    },
  ];

  const activePlayer = player[0];

  const returnActivePlayer = () => activePlayer;

  const switchTurn = () => {
    activePlayer === player[0]
      ? (activePlayer = player[1])
      : (activePlayer = player[0]);
  };
  return { switchTurn, returnActivePlayer };
})();
