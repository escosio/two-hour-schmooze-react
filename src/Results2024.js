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
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            margin: "5px",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            width: "300px",
            fontSize: "16px",
          }}
          placeholder="Enter player or team"
        />
        <h2>2024 Results</h2>

        {search.length > 0 && (
          <>
            <button
              onClick={() => setSearch("")}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                borderRadius: "5px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              {resultsToDisplay.length +
                ` ${
                  resultsToDisplay.length !== 1
                    ? "results were found"
                    : "result was found"
                }`}
            </p>
          </>
        )}
      </div>
      <table className="results">
        <TableHeader headerArray={["Player", "Price", "Team"]} />
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
