import { TableHeader } from "./data/components/TableHeaders";

/**
 * Historical keeper results for previous years
 * @param {*} param0
 * @returns
 */
export const Results = ({ players, keepers, onReset }) => {
  function getTimesKept(playerName, owner, year) {
    // creates an array of years, if player name and owner matches
    const yearsKeptByOwner = keepers
      .filter(
        (player) => player.player_name === playerName && player.owner === owner
      )
      .map((player) => player.year);
    let curYear = year;
    let timesKept = 0;
    while (yearsKeptByOwner.includes(curYear)) {
      timesKept += 1;
      curYear -= 1;
    }
    return timesKept;
  }
  const tableHeaders = ["Player", "Year", "Owner", "Price", "Time Kept"];

  return (
    <table className="results">
      <TableHeader headerArray={tableHeaders} />
      <tbody>
        {players.map((player, i) => (
          <tr key={i}>
            <td>{player.player_name}</td>
            <td>{player.year}</td>
            <td>{player.owner}</td>
            <td>${player.price}</td>
            <td>
              {getTimesKept(player.player_name, player.owner, player.year)}
            </td>
          </tr>
        ))}
        {players.length < 1 && (
          <div className="clear-filter">
            <p>No results {`:(`}</p>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJoM3FsbmtrcWd2ZnhqdHhraGh4OHM1dHBxZ2xsZ2FweG44NmhvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oh71iAPsEGIh56oue/giphy.gif" />
          </div>
        )}
      </tbody>
    </table>
  );
};
