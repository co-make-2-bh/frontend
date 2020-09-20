import React from "react";
import ListingCard from "./ListingCard";
import styled from "styled-components";

/////////////////////////////
//      LISTING STYLE      //
/////////////////////////////
const ListingStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #21333e;
`;

export const StyledH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 48px;
  padding-top: 2%;
  color: #21333e;
  text-align: center;
`;
////////////////////////////
//      LISTING CODE      //
////////////////////////////
function ListingPage() {
  return (
    <ListingStyle>
      <StyledH1>Community Listing Page.</StyledH1>
      <p>Welcome to the community! Let your voice be heard.</p>
      <ListingCard />
      <ListingCard />
    </ListingStyle>
  );
}

export default ListingPage;
