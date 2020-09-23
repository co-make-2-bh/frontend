import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ListingCard from "./ListingCard";
import { ContextObject } from "../contexts/context";
import { ListingStyle, StyledH1 } from "../styles/EverythingElseStyles";

function ListingPage(props) {
  const { issues } = useContext(ContextObject);
  const history = useHistory();

  const addIssue = () => {
    history.push("/createIssue");
  };

  return (
    <ListingStyle>
      <StyledH1>Community Listing Page.</StyledH1>
      <p>Welcome to the community! Let your voice be heard.</p>
      <button onClick={addIssue}>Add an issue</button>
      <br />
      {issues &&
        issues.map((issue) => {
          return (
            <ListingCard
              title={issue.title}
              description={issue.description}
              issue={issue}
              key={issue.issueid}
              issueId={issue.issueid}
            />
          );
        })}
    </ListingStyle>
  );
}

export default ListingPage;
