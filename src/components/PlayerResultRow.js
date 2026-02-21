/**
 * A single row displaying player keeper history
 * @param {Object} props
 * @param {Object} props.player - Player data
 * @param {number} props.timesKept - Number of consecutive years kept
 */
export const PlayerResultRow = ({ player, timesKept }) => {
  return (
    <tr>
      <td>{player.player_name}</td>
      <td>{player.year}</td>
      <td>{player.owner}</td>
      <td>${player.price}</td>
      <td>{timesKept}</td>
    </tr>
  );
};
