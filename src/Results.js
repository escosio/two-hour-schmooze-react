export const Results = ({ players, onReset }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  // const players = selectedTeam
  //   ? keepers.filter((player) => player.owner === selectedTeam)
  //   : keepers;

  function sortByYear(e) {
    e.preventDefault();
    const sortedPlayers = players.slice().sort((a, b) => a.year - b.year);
    console.log(sortedPlayers);
  }

  function calculateTimesKept(player, owner) {
    let curYear = currentYear;
    // check for the number of times kept
  }

  return (
    <table className="results">
      <thead>
        <th>Player</th>
        <th onClick={sortByYear}>Year</th>
        <th>Owner</th>
        <th>{currentYear - 1} Price</th>
        <th>{currentYear} Price (est.)</th>
      </thead>
      <tbody>
        {players.map((player, i) => (
          <tr key={i}>
            <td>{player.player_name}</td>
            <td>{player.year}</td>
            <td>{player.owner}</td>
            <td>${player.price}</td>
            <td>${player.price + 3}</td>
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
