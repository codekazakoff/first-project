import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInput from "./SignInput";
import SignCheck from "./SignCheck";
import "../../css/signUp/form.css";

class SignUp extends Component {
  state = {
    form: {
      email: "",
      password: "",
      item: "",
      select: "",
      checkbox: false,
      radio: false,
    },
    errors: {},
  };

  validateProparty = ({ name, value, checked }) => {
    if (name === "email" && value.trim() === "") return "Email is required";

    if (name === "password" && value.trim() === "")
      return "Password is required";

    if (name === "item" && value.trim() === "") return "Name is required";

    if (name === "select" && value.trim() === "") return "Select is required";

    if (name === "checkbox" && checked === false) return "Checkbox is required";

    if (name === "radio" && checked === false) return "Radio is required";
  };

  validateSubmit = () => {
    const {
      form: { email, password, item, select, checkbox, radio },
    } = this.state;
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      item.trim() === "" ||
      select.trim() === "" ||
      checkbox === false ||
      radio === false
    )
      return "Please enter form all elements";
  };

  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    const errors = { ...this.state.errors };
    //  const errors = {};
    const msg = this.validateProparty(target);
    if (msg) errors[name] = msg;
    else delete errors[name];

    console.log("errors", errors);
    if (name === "checkbox" || name === "radio") {
      this.setState((prevState) => ({
        ...prevState,
        form: { ...prevState.form, [name]: checked },
        errors,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        form: { ...prevState.form, [name]: value },
        errors,
      }));
    }
  };

  hadleSubmit = (e) => {
    e.preventDefault();
    const msg = this.validateSubmit();

    if (msg) alert(msg);
    else alert("Success! Welcome to Site");
  };

  render() {
    const { form, errors } = this.state;
    const { handleChange, hadleSubmit } = this;
    return (
      <Container>
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={hadleSubmit}>
              <SignInput
                type="email"
                label="Enter your Email"
                placeholder="Email"
                name="email"
                value={form.email}
                handleChange={handleChange}
                error={errors.email}
              />
              <SignInput
                type="password"
                label="Enter your password"
                placeholder="Password"
                name="password"
                value={form.password}
                handleChange={handleChange}
                error={errors.password}
              />

              <SignInput
                name="item"
                type="text"
                value={form.item}
                placeholder="Name"
                error={errors.item}
                label="Enter your Name"
                handleChange={handleChange}
              />

              <SignInput
                type="select"
                name="select"
                value={form.select}
                error={errors.select}
                label="Example select"
                handleChange={handleChange}
              />

              <SignCheck
                name="checkbox"
                type="checkbox"
                label="Check me out"
                error={errors.checkbox}
                checked={form.checkbox}
                handleChange={handleChange}
              />

              <SignCheck
                type="radio"
                name="radio"
                label="first radio"
                error={errors.radio}
                checked={form.radio}
                handleChange={handleChange}
              />

              <SignCheck
                type="radio"
                name="radio"
                label="Second radio"
                error={errors.radio}
                checked={form.radio}
                handleChange={handleChange}
              />

              <Button
                variant="primary"
                type="submit"
                className="mt-2 float-right"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
