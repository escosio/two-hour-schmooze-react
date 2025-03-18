import "./styles.css";
import { useState } from "react";
import { keepers } from "./data/keeper_data";
import { Header } from "./Header";
import { PlayerFilter } from "./PlayerFilter";
import { Results } from "./Results";
import { Footer } from "./Footer";
import Results2024 from "./Results2024";
import draft2024data from "./data/draftResults2024.json";

const owners = [
  ...new Set(
    keepers.map((team) => team.owner).filter((name) => name != "Lamarr")
  ),
];

const playersNames = [...new Set(keepers.map((player) => player.player_name))];

export default function App() {
  const [players, setPlayers] = useState(keepers);
  const [team, setTeam] = useState("All");
  const [year, setYear] = useState("All");
  const [selectedPlayer, setSelectedPlayer] = useState("All");
  const [showSearch, setShowSearch] = useState(false);

  function filterByTeam(team) {
    setPlayers((players) => players.filter((player) => player.owner === team));
  }

  function filterByPlayer(playerName) {
    setPlayers((players) =>
      players.filter((player) => player.player_name === playerName)
    );
  }

  function filterByYear(year) {
    setPlayers((players) => players.filter((player) => player.year === year));
  }

  function handleReset() {
    setPlayers(keepers);
    setTeam(() => null);
    setYear(() => null);
  }

  function handleSearch(e) {
    e.preventDefault();
    setPlayers(keepers);
    if (team != "All") {
      filterByTeam(team);
    }
    if (selectedPlayer !== "All") {
      filterByPlayer(selectedPlayer);
    }
    if (year !== "All") {
      filterByYear(year);
    }
  }

  return (
    <div className="App">
      <Header />
      {showSearch ? (
        <>
          <button className="btn" onClick={() => setShowSearch(!showSearch)}>
            Hide draft results
          </button>
          <Results2024 draftResults={draft2024data} />
        </>
      ) : (
        <button
          className="btn"
          onClick={() => setShowSearch(!showSearch)}
          style={{ marginTop: "20px" }}
        >
          Want to search last year's draft results?
        </button>
      )}

      <PlayerFilter
        players={players}
        keepers={keepers}
        team={team}
        year={year}
        selectedPlayer={selectedPlayer}
        onSetTeam={setTeam}
        onSetYear={setYear}
        onSelectPlayer={setSelectedPlayer}
        onHandleSearch={handleSearch}
        onReset={handleReset}
      />
      <Results players={players} keepers={keepers} onReset={handleReset} />
      <Footer />
    </div>
  );
}
