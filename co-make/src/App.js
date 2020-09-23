import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import axiosWithAuth from "./utils/axiosWithAuth";

import Header from "./Components/Header";
import CreateIssueForm from "./Components/CreateIssueForm";
import EditIssueForm from "./Components/EditIssueForm";
import ListingPage from "./Components/ListingPage";
import Login from "./Components/LoginForm";
import Register from "./Components/RegisterForm";
import { ContextObject } from "./contexts/context";
import { StyledH1 } from "./styles/EverythingElseStyles";

function App() {
  const [issues, addIssues] = useState([]);
  const [username, setUsername] = useState("");
  const [upvote, setUpvote] = useState(0);

  const getIssues = () => {
    axiosWithAuth()
      .get("issues/issues")
      .then((res) => {
        addIssues(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Router>
      <ContextObject.Provider
        value={{
          issues,
          addIssues,
          username,
          setUsername,
          getIssues,
          upvote,
          setUpvote,
        }}
      >
        <Header />
        <Route exact path="/">
          <StyledH1>Login Page</StyledH1>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/listings" component={ListingPage} />
        <PrivateRoute exact path="/createIssue" component={CreateIssueForm} />
        <PrivateRoute exact path="/editIssue:id" component={EditIssueForm} />
      </ContextObject.Provider>
    </Router>
  );
}

export default App;
