import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const IssueModal = ({ showModal, handleCloseModal, issue }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (issue && issue.comments_url) {
        let result = await fetch(issue.comments_url);
        let json = await result.json();
        setComments(json);
      }
    }
    fetchData();
  }, [issue]);
  return (
    <Modal className="Modal" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{issue.title}</Modal.Title>
      </Modal.Header>
      <ul>
        {comments.map((c) => (
          <li>{c.body}</li>
        ))}
      </ul>
      <Modal.Body>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueModal;
