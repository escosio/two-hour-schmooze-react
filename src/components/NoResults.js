export const NoResults = ({ message = "No results :(", gifUrl }) => {
  return (
    <div className="clear-filter">
      <p>{message}</p>
      {gifUrl && <img src={gifUrl} alt="No results" />}
    </div>
  );
};
