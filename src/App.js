import React, { Component } from "react";
import Api from "./components/movies/api/api";
// import Movies from "./components/movies/Movie.js";
class App extends Component {
  render() {
    return (
      <>
        {/* <Movies /> */}
        <Api />
      </>
    );
  }
}

export default App;
