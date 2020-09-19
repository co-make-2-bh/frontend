import React from "react";
import ListingCard from "./ListingCard";
import styled from "styled-components";

/////////////////////////////
//      LISTING STYLE      //
/////////////////////////////
const ListingStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

////////////////////////////
//      LISTING CODE      //
////////////////////////////
function ListingPage() {
  return (
    <ListingStyle>
      <h1>Hi I am the listing page and I render multiple listing cards</h1>
      <ListingCard />
    </ListingStyle>
  );
}

export default ListingPage;
