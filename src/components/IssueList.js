import React from "react";
import Issue from "./Issue";

const IssueList = ({ issues, handleIssueClick }) => {
  if (issues.length === 0) return null;

  return (
    <div>
      <h2>Issue list</h2>
      <ul className="issues reset">
        {issues.map((i) => (
          <Issue issue={i} handleIssueClick={handleIssueClick} />
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
