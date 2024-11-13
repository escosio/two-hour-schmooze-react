import { useState } from "react";

export const PlayerFilter = ({
  players,
  keepers,
  team,
  year,
  selectedPlayer,
  onSetTeam,
  onSetYear,
  onSelectPlayer,
  onHandleSearch,
  onReset,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2019 },
    (_, i) => currentYear - i
  );
  const owners = [
    ...new Set(
      keepers.map((team) => team.owner).filter((name) => name != "Lamarr")
    ),
  ];

  const playersNames = [
    ...new Set(players.map((player) => player.player_name)),
  ].sort();

  function handleReset() {
    onReset();
    onSetTeam("All");
    onSetYear("All");
    onSelectPlayer("All");
  }

  return (
    <>
      <h3>⚾️ Keepers History 🏟️</h3>
      <p className="subheader">
        Historical table of keepers for the legendary fantasy baseball league,
        Two Hour Schmooze Radio. You may filter by Fantasy Owner, year, or
        player.
      </p>
      {/* <Rules /> */}
      <form className="team-selection" onSubmit={onHandleSearch}>
        <DropDownOption filterName="team" value={team} onSetFilter={onSetTeam}>
          {owners.map((owner) => (
            <option value={owner} key={owner}>
              {owner}
            </option>
          ))}
        </DropDownOption>
        <DropDownOption
          filterName="year"
          value={year}
          onSetFilter={onSetYear}
          isNumber={true}
        >
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </DropDownOption>
        <DropDownOption
          filterName="player"
          value={selectedPlayer}
          onSetFilter={onSelectPlayer}
        >
          {playersNames.map((player, i) => (
            <option value={player} key={i}>
              {player}
            </option>
          ))}
        </DropDownOption>
        <button>Filter</button>
      </form>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

function DropDownOption({
  filterName,
  value,
  onSetFilter,
  children,
  isNumber = false,
}) {
  return (
    <li>
      <label>Select a {filterName}</label>
      {isNumber ? (
        <select
          value={value}
          onChange={(e) => onSetFilter(Number(e.target.value))}
        >
          <option value="All">All</option>
          {children}
        </select>
      ) : (
        <select value={value} onChange={(e) => onSetFilter(e.target.value)}>
          <option value="All">All</option>
          {children}
        </select>
      )}
    </li>
  );
}

function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rules">
      <div>
        <h4>Rules</h4>
        <button
          className="icon"
          onClick={() => setIsOpen(!isOpen)}
          style={{ marginLeft: "10px" }}
        >
          {isOpen ? <>&times;</> : "+"}
        </button>
      </div>
      {isOpen && (
        <ol>
          <li>Players can be kept for up to 3 consecutive years</li>
          <li>
            Players price will increase at a scale based on the times being
            kept. 1st time ($3), 2nd time ($5) and 3rd time ($7)
          </li>
        </ol>
      )}
    </div>
  );
}
