import React, { Component } from "react";
// import NavbarHeader from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import SignUp from "./components/signUp/Form";
// import OneForm from "./components/form/OneForm";
// import Api from "./container/API/api";
// import Movies from "./container/Movie/Movie";
class App extends Component {
  render() {
    return (
      <>
        {/* <Movies /> */}
        {/* <Api /> */}
        {/* <OneForm /> */}
        {/* <NavbarHeader /> */}
        <SignUp />
      </>
    );
  }
}

export default App;
