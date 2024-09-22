import { useState } from "react";

export const PlayerFilter = ({
  onFilterByYear,
  onFilterByTeam,
  onFilterByPlayer,
  onReset,
  players,
  keepers,
}) => {
  const [team, setTeam] = useState(null);
  const [year, setYear] = useState(null);
  const [player, setPlayer] = useState(null);
  const years = [2020, 2021, 2022, 2023, 2024];
  const owners = [
    ...new Set(
      keepers.map((team) => team.owner).filter((name) => name != "Lamarr")
    ),
  ];

  const playersNames = [
    ...new Set(players.map((player) => player.player_name)),
  ];

  function handleSubmit(e) {
    e.preventDefault();
    onReset();
    if (team) {
      onFilterByTeam(team);
    }
    if (year) {
      onFilterByYear(year);
    }
    if (player) {
      onFilterByPlayer(player);
    }
  }

  function handleReset() {
    onReset();
    setTeam(null);
    setYear(null);
    setPlayer(null);
  }

  return (
    <>
      <h3>⚾️ Keepers History 🏟️</h3>

      <form className="team-selection" onSubmit={handleSubmit}>
        <li>
          <label>Select a team:</label>
          <select value={team} onChange={(e) => setTeam(e.target.value)}>
            <option selected>All</option>
            {owners.map((owner) => (
              <option value={owner} key={owner}>
                {owner}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label>Select a year:</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option selected value={null}>
              All
            </option>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label>Select a player</label>
          <select value={player} onChange={(e) => setPlayer(e.target.value)}>
            <option selected>All</option>
            {playersNames.map((player) => (
              <option value={player}>{player}</option>
            ))}
          </select>
        </li>
        <button>Filter</button>
      </form>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
