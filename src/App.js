import "./styles.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import keepers from "./data/keeper_data";
import { Header } from "./Header";
import { PlayerFilter } from "./PlayerFilter";
import { Results } from "./Results";
import { Footer } from "./components/Footer";
import KeeperValues2026 from "./KeeperValues2026";
import DraftResults2025 from "./DraftResults2025";

const owners = [
  ...new Set(
    keepers.map((team) => team.owner).filter((name) => name != "Lamarr"),
  ),
];

// const useReducer = (state, action) => {
//   switch (action.type) {
//     case "filterPlayer":
//       return { ...state };
//     default:
//       return state;
//   }
// };

// function Keepers() {
//   const [keepers, dispatch] = useReducer(reducer, keepers);
// }

const playersNames = [...new Set(keepers.map((player) => player.player_name))];

export default function App() {
  const [players, setPlayers] = useState(keepers);
  const [team, setTeam] = useState("All");
  const [year, setYear] = useState("All");
  const [selectedPlayer, setSelectedPlayer] = useState("All");

  function filterByTeam(team) {
    setPlayers((players) => players.filter((player) => player.owner === team));
  }

  function filterByPlayer(playerName) {
    setPlayers((players) =>
      players.filter((player) => player.player_name === playerName),
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

  const HomePage = () => (
    <>
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
    </>
  );

  return (
    <div className="App">
      <Header />

      {/* Page Navigation */}
      <nav className="page-nav">
        <NavLink to="/" className="nav-btn" end>
          Keeper History
        </NavLink>
        <NavLink to="/draft-results-2025" className="nav-btn">
          2025 Draft Results
        </NavLink>
        <NavLink to="/keeper-values" className="nav-btn">
          2026 Keeper Values
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/draft-results-2025" element={<DraftResults2025 />} />
        <Route path="/keeper-values" element={<KeeperValues2026 />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
