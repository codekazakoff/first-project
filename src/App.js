import React, { Component } from "react";
// import ScrollingList from "./components/movies/LearnLifeCycle";
import Movies from "./components/movies/Movie.js";
class App extends Component {
  render() {
    return (
      <>
        <Movies />
        {/* <ScrollingList /> */}
      </>
    );
  }
}

export default App;
