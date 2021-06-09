import React, { Component } from "react";

class Increment_VS_Decrement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
  }

  handleIncrement = ()=> {
    const {counter} = this.state;
    this.setState({
      counter : counter + 1
    })
  }
  handleDecrement = ()=> {
    const {counter} = this.state;
    this.setState({
      counter : counter - 1
    })
  }
  
  render() {
    console.log("salom increment",this.state.counter);
    const { counter } = this.state;
    const {handleIncrement,handleDecrement} = this;
    return (
      <React.Fragment>
        <h2>salom bu oddiy h1</h2>
        <span style={{marginRight : "1rem"}}>{counter}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </React.Fragment>
    );
  }
}
export default Increment_VS_Decrement;
