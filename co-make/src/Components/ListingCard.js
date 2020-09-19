import React from "react";
import styled from "styled-components";

////////////////////////////
//      CARD STYLE      //
////////////////////////////

const CardStyle = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 2%;
  box-shadow: 3px 3px 8px 0.1px gray;
  text-align: center;
`;
/////////////////////////
//      CARD CODE      //
/////////////////////////

// useEffect(() => {
//     axios.get(``)
//     // .then((res) => {
//     //   console.log(res.data);
//     //   setListItem(res.data);
//     // })
//     // .catch((error) => {
//     //   console.log("Error retrieving data");
//     // });
//   }, []);

function ListingCard() {
  return (
    <CardStyle>
      <h3>Build a wall!</h3>
      <p>Date Posted: 9/19/20</p>
      <p>The park fence is broken!</p>
      <p>Voiced by Andrew Collins</p>
      <p>8 votes</p>
      <button>Upvote</button>
    </CardStyle>
  );
}

export default ListingCard;
