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
  const years = [2020, 2021, 2022, 2023, 2024];
  const owners = [
    ...new Set(
      keepers.map((team) => team.owner).filter((name) => name != "Lamarr")
    ),
  ];

  const playersNames = [
    ...new Set(players.map((player) => player.player_name)),
  ];

  function handleReset() {
    onReset();
    onSetTeam("All");
    onSetYear("All");
    onSelectPlayer("All");
  }

  return (
    <>
      <h3>⚾️ Keepers History 🏟️</h3>
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
          {playersNames.map((player) => (
            <option value={player}>{player}</option>
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
          <option selected value="All">
            All
          </option>
          {children}
        </select>
      ) : (
        <select value={value} onChange={(e) => onSetFilter(e.target.value)}>
          <option selected value="All">
            All
          </option>
          {children}
        </select>
      )}
    </li>
  );
}
