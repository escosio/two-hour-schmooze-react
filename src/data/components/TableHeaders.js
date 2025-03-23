export const TableHeader = ({ headerArray }) => {
  return (
    <thead>
      <tr>
        {headerArray.map((headerName) => (
          <th>{headerName}</th>
        ))}
      </tr>
    </thead>
  );
};
