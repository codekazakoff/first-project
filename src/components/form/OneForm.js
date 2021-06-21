import React, { Component } from "react";
import "../../css/form/form.css";

class OneForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        age: "",
        phone: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      user: { name, age, phone },
    } = this.state;
    const newUser = { ...this.state.user, name, age, phone };
    console.log(newUser);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  render() {
    const {
      user: { name, age, phone },
    } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div className="form-container">
        <p>
          {name}, {age}, {phone}
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={name}
            className="input one-form-input"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <input
            name="age"
            type="number"
            value={age}
            className="input one-form-input"
            placeholder="Enter Your Age"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            value={phone}
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
