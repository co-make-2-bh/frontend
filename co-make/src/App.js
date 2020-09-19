import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

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
