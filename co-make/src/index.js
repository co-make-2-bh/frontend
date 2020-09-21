import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App className="app" />
  </>,
  document.getElementById("root")
);
