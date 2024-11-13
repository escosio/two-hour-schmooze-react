export const Results = ({ players, keepers, onReset }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // getTimesKept("Adolis García", "Scott");

  function sortByYear(e) {
    e.preventDefault();
    const sortedPlayers = players.slice().sort((a, b) => a.year - b.year);
    console.log(sortedPlayers);
  }

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

  return (
    <table className="results">
      <thead>
        <th>Player</th>
        <th onClick={sortByYear}>Year</th>
        <th>Owner</th>
        <th>Price</th>
        <th>Time Kept</th>
      </thead>
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
          <button
            style={{
              marginLeft: "170%",
              marginTop: "30%",
              width: "100px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
            onClick={onReset}
          >
            Clear filters
          </button>
        )}
      </tbody>
    </table>
  );
};
