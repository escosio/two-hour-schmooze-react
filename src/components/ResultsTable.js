import { TableHeader } from "../data/components/TableHeaders";
import { NoResults } from "./NoResults";

/**
 * A reusable table component for displaying results
 * @param {Object} props
 * @param {string[]} props.headers - Array of header names
 * @param {React.ReactNode} props.children - Table row content
 * @param {boolean} props.isEmpty - Whether the data is empty
 * @param {string} props.noResultsGif - Optional gif URL for empty state
 */
export const ResultsTable = ({ headers, children, isEmpty, noResultsGif }) => {
  return (
    <table className="results">
      <TableHeader headerArray={headers} />
      <tbody>
        {children}
        {isEmpty && (
          <tr>
            <td colSpan={headers.length}>
              <NoResults gifUrl={noResultsGif} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
