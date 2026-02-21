import React from "react";
import Results2024 from "./Results2024";
import draft2024data from "./data/draftResults2024.json";

function DraftResults2025() {
  return (
    <div className="draft-results-page">
      <h2>2025 Draft Results</h2>
      <Results2024 draftResults={draft2024data} />
    </div>
  );
}

export default DraftResults2025;
