import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ListingPage from "./Components/ListingPage";

function App() {
  return (
    <Router>
      <Header />
      {/* Login/Register could be shown here */}
      <PrivateRoute component={ListingPage} />
      <Footer />
    </Router>
  );
}

export default App;
