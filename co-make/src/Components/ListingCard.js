import React, { useState } from "react";
// import styled from "styled-components";
import { CardStyle, TextItem } from '../styles/EverythingElseStyles';
import { useHistory } from "react-router-dom";
import Upvote from "./Upvote";
//import axiosWithAuth from "../utils/axiosWithAuth";
////////////////////////////
//      CARD STYLE      //
////////////////////////////

// export const CardStyle = styled.div`
//   width: 500px;
//   height: 600px;
//   padding: 40px;
//   margin-bottom: 2%;
//   background-color: #228283;
//   box-sizing: border-box;
//   box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
//   border-radius: 10px;
//   color: #21333e;
// `;
// const TextItem = styled.div`
//   ${"" /* display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center; */}
// `;

/////////////////////////
//      CARD CODE      //
/////////////////////////

function ListingCard(props) {
  //const {} = props;
  const [upvote, setUpvote] = useState(0);
  const history = useHistory();

  const editIssue = (event) => {
    //event.preventDefault();
    history.push(`/editIssue`);
  };

  const deleteIssue = () => {
    console.log("delete");
    history.push("/listings");
    // axiosWithAuth()
    //   .delete(`/api/listing/${id}`)
    //   .then(() => {
    //     history.push("/listings");
    //   })
    //   .catch((err) => err);
  };

  return (
    <CardStyle>
      <TextItem>
        <h4>Title: </h4>
        <p>Build a wall!</p>
      </TextItem>
      <TextItem>
        <h4>Date Posted: </h4>
        <p>9/19/20</p>
      </TextItem>
      <TextItem>
        <h4>Description: </h4>
        <p>The park fence is broken!</p>
      </TextItem>
      <p>{upvote} votes</p>
      <Upvote upvote={upvote} setUpvote={setUpvote} />
      <TextItem>
        <p>Concern voiced by: </p>
        <p> Andrew Collins</p>
      </TextItem>
      <TextItem>
        <button onClick={editIssue}>Edit</button>
        <button onClick={deleteIssue}>Delete</button>
      </TextItem>
    </CardStyle>
  );
}

export default ListingCard;
