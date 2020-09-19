import React from "react";
import ListingCard from "./ListingCard";

////////////////////////
//      LISTINGS      //
////////////////////////
function ListingPage() {
  return (
    <div>
      <h1>Hi I am the listing page and I render multiple listing cards</h1>
      <ListingCard />
    </div>
  );
}

export default ListingPage;
// useEffect(() => {
//     axios
//       .get("", tickets) // live url: https://dev-desk-backend.herokuapp.com/tickets
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   }, []);

//Map through tickets and show each Ticket component
