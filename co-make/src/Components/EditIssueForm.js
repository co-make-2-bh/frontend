import React from "react";
import { CardStyle } from "./ListingCard";
import { ListingStyle } from "./ListingPage";

export default function EditIssueForm() {
  return (
    <ListingStyle>
      <CardStyle>
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
