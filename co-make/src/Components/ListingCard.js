import React, { useState, useContext } from "react";
import { CardStyle } from "../styles/EverythingElseStyles";
import { useHistory } from "react-router-dom";
import Upvote from "./Upvote";
import { ContextObject } from "../contexts/context";
import axiosWithAuth from "../utils/axiosWithAuth";

function ListingCard(props) {
  const { title, description, issueId } = props;

  const { getIssues } = useContext(ContextObject);
  const [upvote, setUpvote] = useState(0);
  const history = useHistory();

  const editIssue = (event) => {
    event.preventDefault();
    history.push(`/editIssue${issueId}`);
  };

  const deleteIssue = (id) => {
    axiosWithAuth()
      .delete(`/issues/issue/${id}`)
      .then(() => {
        getIssues();
        history.push("/listings");
      })
      .catch((error) => {
        alert(`error ${error.message}`);
      });
  };

  return (
    <CardStyle style={{ color: "ghostwhite" }}>
      <h4>Title: </h4>
      <p>{title}</p>
      <h4>Description: </h4>
      <p>{description}</p>
      <p>{upvote} votes</p>
      <Upvote upvote={upvote} setUpvote={setUpvote} id={issueId} />
      <button onClick={editIssue}>Edit</button>
      <button onClick={() => deleteIssue(issueId)}>Delete</button>
    </CardStyle>
  );
}

export default ListingCard;
