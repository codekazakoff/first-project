import React, { Component } from "react";
 import NavbarHeader from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import JoiBrowser from "./components/signUp/JoiBrowser";

 import SignUp from "./components/signUp/Form";
 import OneForm from "./components/form/OneForm";
 import Api from "./container/API/api";
 import Movies from "./container/Movie/Movie";
 import {Switch , Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
        <NavbarHeader />

        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/api" component={Api}/>
          <Route exact path="/oneForm" component={OneForm}/>
          <Route exact path="/joiBrowser" component={JoiBrowser}/>
        </Switch>
      </>
    );
  }
}

export default App;
