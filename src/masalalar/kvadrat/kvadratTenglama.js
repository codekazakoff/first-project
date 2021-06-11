import React, { Component } from "react";
import '../../css/kvadrat/kvadrat.css';
class Tenglama extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      x1: "",
      x2: "",
      x: "",
      D: "",
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { a, b, c } = this.state;
    let x1, x2, x, D;
    D = Math.pow(b, 2) - 4 * a * c;
    x1 = (-b + Math.sqrt(D)) / 2;
    x2 = (-b - Math.sqrt(D)) / 2;
    x = b / 2;
    this.setState({ D: D });
    if (D > 0) {
      this.setState({ x1, x2 });
    } else if (D === 0) {
      this.setState({ x });
    }
  };
  newMethod = (D, x1, x2, x) => {
    return D > 0 ? `x1 = ${x1}   x2 =  ${x2}` : D === 0 ? `x = ${x}` : `Yechimi  Juqku`;
  };

  render() {
    const { handleSubmit, handleInputChange, newMethod } = this;
    const { x1, x2, D, x } = this.state;
    return (
      <>
       <section>
        <div className="wrapper">
            <h1>Kvadrat tenglama</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-controls">
                <label htmlFor="a">a koiffisetni kiriting</label>
                <input
                  name="a"
                  id="a"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Enter your a value"
                  required  
                />
              </div>
              <div className="form-controls">
                <label htmlFor="b">b koiffisetni kiriting</label>
                <input
                  name="b"
                  id="b"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Enter your b value"
                  required  
                />
              </div>
              <div className="form-controls">
                <label htmlFor="c">c koiffisetni kiriting</label>
                <input
                  name="c"
                  id="c"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Enter your c value"
                  required  
                />
              </div>
              <input type="submit" value="Result" />
            </form>
            <h2>
                Tenglamamizning yechimlari: 
                { D  &&  <p> { newMethod(D, x1, x2, x) } </p>}
            </h2>
          </div>
       </section>
      </>
    );
  }
}

export default Tenglama;
