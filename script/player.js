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

  let activePlayer = player[0];

  const returnActivePlayer = () => activePlayer;

  const resetActivePlayer = () => (activePlayer = player[0]);

  const setFirstPlayerName = (nameInput) => (player[0].playerName = nameInput);

  const setSecondPlayerName = (nameInput) => (player[1].playerName = nameInput);

  const switchTurn = () => {
    activePlayer === player[0]
      ? (activePlayer = player[1])
      : (activePlayer = player[0]);
  };

  const returnPlayer = () => player;

  return {
    switchTurn,
    returnActivePlayer,
    resetActivePlayer,
    setFirstPlayerName,
    setSecondPlayerName,
    returnPlayer,
  };
})();
