import React, { Component } from "react";
import "../../css/form/form.css";
import OneInput from "./OneInput";

class OneForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        age: "",
        phone: "",
        adress: {
          city: "",
          zipecoder: "",
        },
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      user: {
        name,
        age,
        phone,
        adress: { city, zipecoder },
      },
    } = this.state;

    const newUser = { ...this.state.user, name, age, phone, city, zipecoder };
    console.log(newUser);
  };

  handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "nested") {
      this.setState((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          adress: {
            ...prevState.user.adress,
            [name]: value,
          },
        },
      }));
    } else {
      this.setState((prevState) => ({
        user: { ...prevState.user, [name]: value },
      }));
    }
  };

  render() {
    const {
      user: { name, age, phone },
    } = this.state;
    const {
      user: {
        adress: { city, zipecoder },
      },
    } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <OneInput
            name="city"
            value={city}
            onChange={(e) => handleChange(e, "nested")}
            placeholder="Enter Your City"
            className="input one-form-input"
          />
          <OneInput
            name="zipecoder"
            value={zipecoder}
            className="input one-form-input"
            placeholder="Enter Your Zipecoder"
            onChange={(e) => handleChange(e, "nested")}
          />

          <OneInput
            name="name"
            value={name}
            className="input one-form-input"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <OneInput
            name="age"
            type="number"
            value={age}
            className="input one-form-input"
            placeholder="Enter Your Age"
            onChange={handleChange}
          />
          <OneInput
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
