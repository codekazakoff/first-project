import React, { Component } from "react";

import "../../css/inc_vs_dec/inc_vs_dec.css";

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
      <div>
        <span>{counter}</span>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Minus</button>
      </div>
    );
  }
}
export default Increment_VS_Decrement;
