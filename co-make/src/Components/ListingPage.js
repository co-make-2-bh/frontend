import React from "react";
import ListingCard from "./ListingCard";
import styled from "styled-components";

/////////////////////////////
//      LISTING STYLE      //
/////////////////////////////
const ListingStyle = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ededed;
`;

////////////////////////////
//      LISTING CODE      //
////////////////////////////
function ListingPage() {
  return (
    <ListingStyle>
      <h1>Community Listing Page</h1>
      <p>Welcome to the community! Let your voice be heard.</p>
      <ListingCard />
    </ListingStyle>
  );
}

export default ListingPage;
