import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./components/Header";
import CreateIssueForm from "./components/CreateIssueForm";
import EditIssueForm from "./components/EditIssueForm";
import ListingPage from "./components/ListingPage";
import { ContextObject } from "./contexts/context";
import { StyledH1 } from "./components/ListingPage";

function App() {
  // axiosWithAuth()
  //   .get("/api")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

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

  return (
    <Router>
      <ContextObject.Provider>
        <Header />
        <Route exact path="/">
          <StyledH1>Login Page</StyledH1>
        </Route>
        <PrivateRoute path="/listings" component={ListingPage} />
        <PrivateRoute exact path="/createIssue" component={CreateIssueForm} />
        <PrivateRoute exact path="/editIssue" component={EditIssueForm} />
      </ContextObject.Provider>
    </Router>
  );
}

export default App;
