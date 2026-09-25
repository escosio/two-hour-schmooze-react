import { useState } from "react";
import { TableHeader } from "./data/components/TableHeaders";

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
    <div className="draft-results">
      <div className="search-bar">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter player or team"
          aria-label="Search by player or team"
        />
        {search.length > 0 && (
          <button className="btn btn-secondary" onClick={() => setSearch("")}>
            Clear
          </button>
        )}
      </div>
      <p className="result-count" aria-live="polite">
        {search.length > 0 &&
          `${resultsToDisplay.length} ${
            resultsToDisplay.length !== 1
              ? "results were found"
              : "result was found"
          }`}
      </p>
      <div className="table-wrap">
        <table className="results">
          <TableHeader headerArray={["Player", "Price", "Team"]} />
          <tbody>
            {!resultsToDisplay.length && (
              <tr className="empty-row">
                <td colSpan={3}>Enter a player name</td>
              </tr>
            )}
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
    </div>
  );
}

export default Results2024;
