import React from "react";
import keeperValues from "./data/keeperValues2026.json";

function KeeperValues2026() {
  return (
    <div className="keeper-values-container">
      <h2>2026 Keeper Values</h2>
      <p className="keeper-values-subtitle">
        All player keeper eligibility and pricing for the 2026 season
      </p>

      {keeperValues.teams.map((team, index) => (
        <div key={index} className="team-keeper-card">
          <div className="team-keeper-header">
            <h3>{team.teamName}</h3>
            <span className="owner-badge">{team.owner}</span>
          </div>

          {/* Previously Kept Players Section */}
          {team.previouslyKept.length > 0 && (
            <div className="keeper-section">
              <h4 className="section-header previously-kept">
                Previously Kept Players
              </h4>
              <table className="keeper-table">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>2025 Price</th>
                    <th>Times Kept</th>
                    <th>Next Keep</th>
                    <th>2026 Price</th>
                  </tr>
                </thead>
                <tbody>
                  {team.previouslyKept.map((player, pIndex) => (
                    <tr
                      key={pIndex}
                      className={
                        player.price2026 === "INELIGIBLE" ? "ineligible" : ""
                      }
                    >
                      <td>{player.player}</td>
                      <td>${player.price2025}</td>
                      <td>{player.timesKept}</td>
                      <td>{player.nextKeep}</td>
                      <td className="price-cell">
                        {player.price2026 === "INELIGIBLE" ? (
                          <span className="ineligible-badge">INELIGIBLE</span>
                        ) : (
                          `$${player.price2026}`
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* New Eligible Players Section */}
          {team.newEligible.length > 0 && (
            <div className="keeper-section">
              <h4 className="section-header new-eligible">
                New Eligible Players
              </h4>
              <table className="keeper-table">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>2025 Price</th>
                    <th>Next Keep</th>
                    <th>2026 Price</th>
                  </tr>
                </thead>
                <tbody>
                  {team.newEligible.map((player, pIndex) => (
                    <tr key={pIndex}>
                      <td>{player.player}</td>
                      <td>${player.price2025}</td>
                      <td>{player.nextKeep}</td>
                      <td className="price-cell">${player.price2026}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default KeeperValues2026;
