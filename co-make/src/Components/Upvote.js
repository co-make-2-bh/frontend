import React from "react";

export default function Upvote(props) {
  const { upvote, setUpvote } = props;

  const upvotePost = (e) => {
    e.preventDefault();
    let count = 1 + upvote;
    setUpvote(count);
  };

  return <button onClick={upvotePost}>Upvote</button>;
}
