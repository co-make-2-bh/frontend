import React from "react";
import { useHistory } from "react-router-dom";

import { CardStyle, ListingStyle, StyledH1 } from '../styles/EverythingElseStyles'

// import { CardStyle } from "./ListingCard";
// import { ListingStyle, StyledH1 } from "./ListingPage";

export default function EditIssueForm() {
  const history = useHistory();

  return (
    <ListingStyle>
      <StyledH1>Edit Issue</StyledH1>
      <CardStyle>
        <button
          onClick={() => {
            history.push("/listings");
          }}
        >
          Back
        </button>
        <form>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" />
          </label>
          <label htmlFor="name">
            Your name:
            <input type="text" name="name" />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              cols="50"
              rows="20"
              style={{ resize: "none" }}
              name="description"
            />
          </label>
          <button>Submit</button>
        </form>
      </CardStyle>
    </ListingStyle>
  );
}
