export const TableHeader = ({ headerArray }) => {
  return (
    <thead>
      <tr>
        {headerArray.map((headerName) => (
          <th key={headerName}>{headerName}</th>
        ))}
      </tr>
    </thead>
  );
};
