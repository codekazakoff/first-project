import React, { Component } from "react";
import "../../css/form/form.css";

class OneForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      phone: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, phone } = this.state;
    const newUser = { name, age, phone };
    this.setState({ name: "", age: "", phone: "" });
    console.log(newUser);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //  console.log(e.target.value);
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <div className="form-container">
        <p>
          {this.state.name} {this.state.age} {this.state.phone}
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            className="input one-form-input"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <input
            name="age"
            type="number"
            value={this.state.age}
            className="input one-form-input"
            placeholder="Enter Your Age"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            value={this.state.phone}
            className="input one-form-input"
            placeholder="Enter Your Phone"
            onChange={handleChange}
          />

          <button className="form__submit">Send</button>
        </form>
      </div>
    );
  }
}
export default OneForm;
