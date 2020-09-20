import React from "react";
import { useHistory } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import { ContextObject } from "../contexts/context";
import { CardStyle } from "./ListingCard";
import { ListingStyle, StyledH1 } from "./ListingPage";

export default function CreateIssueForm() {
  // const { issues, addIssues, username, getIssues } = useContext(ContextObject);
  const history = useHistory();

  const formSubmit = (e) => {
    // e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/", {
    //     title: formValues.title,
    //     categoryId: formValues.categoryId,
    //     description: formValues.description,
    //     imageURL: formValues.imageURL,
    //     username: username,
    //   })
    //   .then((res) => {
    //     addIssues([res.data, ...issues]);
    //     getIssues();
    //     history.push("/listings");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <ListingStyle>
      <StyledH1>Add New Issue</StyledH1>
      <CardStyle>
        <button
          onClick={() => {
            history.push("/listings");
          }}
        >
          Back
        </button>
        <form onSubmit={formSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </CardStyle>
    </ListingStyle>
  );
}
