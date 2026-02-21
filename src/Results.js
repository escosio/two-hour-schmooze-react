import { ResultsTable, PlayerResultRow } from "./components";
import { getTimesKept } from "./utils/keeperUtils";

const TABLE_HEADERS = ["Player", "Year", "Owner", "Price", "Time Kept"];
const NO_RESULTS_GIF =
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJoM3FsbmtrcWd2ZnhqdHhraGh4OHM1dHBxZ2xsZ2FweG44NmhvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oh71iAPsEGIh56oue/giphy.gif";

/**
 * Historical keeper results for previous years
 * @param {Object} props
 * @param {Array} props.players - Array of player data
 * @param {Array} props.keepers - Array of keeper history data
 * @param {Function} props.onReset - Reset callback function
 */
export const Results = ({ players, keepers, onReset }) => {
  return (
    <ResultsTable
      headers={TABLE_HEADERS}
      isEmpty={players.length < 1}
      noResultsGif={NO_RESULTS_GIF}
    >
      {players.map((player, i) => (
        <PlayerResultRow
          key={i}
          player={player}
          timesKept={getTimesKept(
            player.player_name,
            player.owner,
            player.year,
            keepers,
          )}
        />
      ))}
    </ResultsTable>
  );
};
