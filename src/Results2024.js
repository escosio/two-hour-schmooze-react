import { useState } from "react";

function Results2024({ draftResults }) {
  const [search, setSearch] = useState("");

  draftResults = draftResults.filter(
    (player) => !player.name.includes("empty")
  );
  const resultsToDisplay = draftResults.filter(
    (player) =>
      player.name.toLowerCase().includes(search.toLowerCase()) ||
      player.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>2024 Results</h2>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ margin: "5px" }}
        />
        {search.length > 0 && (
          <button onClick={() => setSearch("")}>Clear</button>
        )}
      </div>
      <table className="results">
        <thead>
          <tr>
            <th>Player</th>
            <th>Price</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {!resultsToDisplay.length && "Enter a player name"}
          {resultsToDisplay.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.price}</td>
              <td>{player.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results2024;
