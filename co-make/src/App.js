import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./Components/Header";
import CreateIssueForm from "./Components/CreateIssueForm";
import EditIssueForm from "./Components/EditIssueForm";
import ListingPage from "./Components/ListingPage";
import Login from "./Components/LoginForm";
import Register from "./Components/RegisterForm";
import { ContextObject } from "./contexts/context";
// import { StyledH1 } from "./Components/ListingPage";
import { StyledH1 } from './styles/EverythingElseStyles';

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
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/listings" component={ListingPage} />
        <Route exact path="/createIssue" component={CreateIssueForm} />
        <Route exact path="/editIssue" component={EditIssueForm} />
      </ContextObject.Provider>
    </Router>
  );
}

export default App;
