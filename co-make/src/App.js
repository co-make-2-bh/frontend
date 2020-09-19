import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListingPage from "./components/ListingPage";

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
