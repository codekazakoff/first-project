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
  
  handleCount =()=>{
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }

  render() {
    const {handleIncrement,handleDecrement,handleCount} = this;

    

    return (
      <div>
        <span>{handleCount()}</span>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Minus</button>
      </div>
    );
  }
}
export default Increment_VS_Decrement;
