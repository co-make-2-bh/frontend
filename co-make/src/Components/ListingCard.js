import React from "react";

////////////////////////////
//      LISTING CARD      //
////////////////////////////
function ListingCard() {
  return (
    <div>
      <h4>Hi I am the listing card</h4>
    </div>
  );
}

export default ListingCard;

//Component that holds each ticket
/////////////////////
//      TICKET     //
/////////////////////
// useEffect(() => {
//     axios.get(`https://dev-desk-backend.herokuapp.com/tickets`)
//     // .then((res) => {
//     //   console.log(res.data.results);
//     //   setTicket(res.data.results);
//     // })
//     // .catch((error) => {
//     //   console.log("Error retrieving data");
//     // });
//   }, []);

//   const submitTickets = (e) => {
//     e.preventDefault();
//     axios.post("https://dev-desk-backend.herokuapp.com/tickets");
//     // .then((res) => setTicket(res.data))
//     // .catch((err) => console.log(err.response));
//   };

//   const changeStatus = (e) => {
//     e.preventDefault();
//     axios.put("https://dev-desk-backend.herokuapp.com/tickets/status");
//     // .then((res) => setTicket(res.data))
//     // .catch((err) => console.log(err.response));
//   };

//   const deleteTicket = (e) => {
//     e.preventDefault();
//     axios.delete("");
//   };

//Display ticket features
//ID
//Title
//Description
//Priority (low med high)
//Status (open, closed, in progress)
//Submit
