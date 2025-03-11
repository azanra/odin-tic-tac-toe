export const gameFlow = (function () {
  let winStatus = false;

  const returnWinStatus = () => winStatus;

  const updateWinStatus = () => (winStatus = !winStatus);

  return { returnWinStatus, updateWinStatus };
})();
