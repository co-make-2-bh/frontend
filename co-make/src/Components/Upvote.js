import React, { useEffect } from "react";

export default function Upvote(props) {
  const { upvote, setUpvote } = props;

  const upvotePost = (e) => {
    e.preventDefault();
    let count = 1 + upvote;
    setUpvote(count);
    //axiosWithAuth().patch("/issues/issue:id/upvote")
  };
  //useEffect(let count = 1 + upvote;
  //.get)

  return <button onClick={upvotePost}>Upvote</button>;
}
