import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "./css/main.css";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
