import React from "react";
import Alert from "react-bootstrap/Alert";

// Check the error type, status from error array and show whatever we want.
const ErrorMessage = ({ error }) => {
  let message;

  if (error[0] === "response") {
    message = `${error[1]} - ${error[2]}`;
  }
  if (error[0] === "fetch") {
    message = "Error in fetch";
  }

  return (
    <Alert>
      <Alert.Heading>
        <div className="error-message-wrapper">{message}</div>
      </Alert.Heading>
    </Alert>
  );
};

export default ErrorMessage;
