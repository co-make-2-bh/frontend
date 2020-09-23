import React from "react";
import { ButtonHover } from "../styles/EverythingElseStyles";

export default function Upvote(props) {
  const { upvote, setUpvote } = props;

  const upvotePost = (e) => {
    e.preventDefault();
    let count = 1 + upvote;
    setUpvote(count);
  };

  return <ButtonHover onClick={upvotePost}>Upvote</ButtonHover>;
}
