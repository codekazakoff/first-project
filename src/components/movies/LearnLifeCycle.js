import React, { Component } from "react";

class LearnLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shohrux",
      count: 0,
    };
    // console.log("constructor - App");
  }

  componentDidMount() {
    // console.log("DidMounting - App");
    console.log(this.state.name);
    this.setState(() => ({ name: "farrux", count: this.state.count + 1 }));
    console.log(this.state.name);
    this.setState(() => ({ name: "kamron", count: this.state.count + 1 }));
    console.log(this.state.name);
    this.setState(() => ({ name: "jahon", count: this.state.count + 1 }));
    console.log(this.state.name);
  }

  render() {
    // console.log("render - App");
    return (
      <>
        {this.state.name} {this.state.count}
      </>
    );
  }
}
export default LearnLifeCycle;
