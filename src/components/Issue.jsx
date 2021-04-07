import React from "react";
import Moment from "react-moment";
import Label from "./Label";

const Issue = ({ issue, handleIssueClick }) => {
  if (!issue) return null;

  let id = issue.id;
  let number = issue.number;
  let title = issue.title;
  let owner = issue.user.login;
  let avatar_url = issue.user.avatar_url;
  let updated_at = issue.updated_at;
  let body = issue.body;
  let labels = issue.labels;
  let comments = issue.comments;

  const truncateString = (str, num) => {
    if (!str) return null;
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <li key={id} className="issue-item" onClick={() => handleIssueClick(issue)}>
      <img src={avatar_url} alt={`${owner}`} className="avatar mr-3" />
      <div className="content-body">
        <h4>
          <span className="title">{title}</span>
          <span className="number">#{number}</span>
          {labels.length >= 0 && (
            <ul className="labels reset">
              {labels.map((label) => (
                <Label label={label} />
              ))}
            </ul>
          )}
        </h4>
        <div>
          <span className="gray-text user-id">@{owner}</span>
          <div className="issue__body">{truncateString(body, 80)}</div>
          <div className="time-and-comment gray-text">
            <span>
              <span className="last-updated">Last updated:</span>
              <Moment fromNow>{updated_at}</Moment>
            </span>
            {comments > 0 && (
              <span>
                <svg
                  className="gray-text octicon octicon-comment v-align-middle"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                  ></path>
                </svg>{" "}
                {comments}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Issue;

// [x] Issue Title with Number of the issue ~
// [x] Owner of the Issue ~
// [x] Owner Avatar ~
// [x] How long ago the issue was updated in a human-friendly format (e.g. 2 days ago) (Hint: react-moment)
// [x] Body of the Issue ~
// [x] Labels of the issue
