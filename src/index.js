import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import Home from "./components/navbar/Home";
import SignIn from "./components/navbar/SignIn";
import SignUp from "./components/navbar/SignUp";
import { Container } from "react-bootstrap";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Container>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </Container>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
