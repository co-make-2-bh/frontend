import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./components/Header.js";

import ListingPage from "./components/ListingPage";
import { ContextObject } from "./contexts/context";

import { StyledH1 } from "./components/ListingPage";

function App() {
  // axiosWithAuth()
  //   .get("/api")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <Router>
      <ContextObject.Provider>
        <Header />
        <Route exact path="/">
          <StyledH1>Login Page</StyledH1>
        </Route>
        <PrivateRoute path="/listings" component={ListingPage} />
      </ContextObject.Provider>
    </Router>
  );
}

export default App;
