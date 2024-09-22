import "./styles.css";
import { useState } from "react";
import { keepers } from "../public/data";
import { Header } from "./Header";
import { PlayerFilter } from "./PlayerFilter";
import { Results } from "./Results";

const owners = [
  ...new Set(
    keepers.map((team) => team.owner).filter((name) => name != "Lamarr")
  ),
];

const playersNames = [...new Set(keepers.map((player) => player.player_name))];

export default function App() {
  const [players, setPlayers] = useState(keepers);
  console.log(players);

  function filterByTeam(team) {
    if (team == "all") {
      setPlayers(keepers);
    }
    setPlayers((players) => players.filter((player) => player.owner === team));
  }

  function filterByPlayer(playerName) {
    if (!playerName) return;

    setPlayers((players) =>
      players.filter((player) => player.player_name === playerName)
    );
  }

  function filterByYear(year) {
    setPlayers((players) => players.filter((player) => player.year === year));
  }

  function handleReset() {
    setPlayers(keepers);
  }

  return (
    <div className="App">
      <Header />
      <PlayerFilter
        onFilterByYear={filterByYear}
        onFilterByTeam={filterByTeam}
        onFilterByPlayer={filterByPlayer}
        onReset={handleReset}
        players={players}
        keepers={keepers}
      />
      <Results players={players} onReset={handleReset} />
    </div>
  );
}
