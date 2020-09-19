import React from "react";
import styled from "styled-components";

////////////////////////////
//      CARD STYLE      //
////////////////////////////

const CardStyle = styled.div`
  width: 500px;
  height: 500px;
  border: solid blue;
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
      <h4>Hi I am the listing card</h4>
    </CardStyle>
  );
}

export default ListingCard;
