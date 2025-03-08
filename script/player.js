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

  const returnPlayer = () => player;

  return { returnPlayer };
})();
