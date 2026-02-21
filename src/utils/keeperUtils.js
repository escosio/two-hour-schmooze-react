/**
 * Calculates how many consecutive years a player has been kept by the same owner
 * @param {string} playerName - The player's name
 * @param {string} owner - The owner's name
 * @param {number} year - The current year to check from
 * @param {Array} keepers - Array of keeper data
 * @returns {number} Number of consecutive years kept
 */
export const getTimesKept = (playerName, owner, year, keepers) => {
  const yearsKeptByOwner = keepers
    .filter(
      (player) => player.player_name === playerName && player.owner === owner,
    )
    .map((player) => player.year);

  let curYear = year;
  let timesKept = 0;

  while (yearsKeptByOwner.includes(curYear)) {
    timesKept += 1;
    curYear -= 1;
  }

  return timesKept;
};
