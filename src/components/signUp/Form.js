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
      name: "",
      select: "",
      range: "",
      checkbox: false,
      radio: false,
    },
    errors: {},
  };

  handleChange = (e) => {
    const { name: Name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      form: { ...prevState.form, [Name]: value },
    }));
  };

  checkboxHandler = (e) => {
    const { checked, name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      form: { ...prevState.form, [name]: checked },
    }));
  };

  hadleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const newForm = form;
    console.log(newForm);
    const { email, password, name, select, range, radio, checkbox } = form;
    const errors = {};
    if (email.trim() === "") {
      errors.email = "Email is Required";
    }
    if (password.trim() === "") {
      errors.password = "Password is Required";
    } else if (password.length > 4 && password.length < 8) {
      errors.password = "Password is length max symbol 8 and min symbol 4";
    }
    if (name.trim() === "") {
      errors.name = "Name is Required";
    } else if (name.length > 0 && password.length < 15) {
      errors.password = "Password is length max letters 15";
    }
    if (select.trim() === "" && select === 1) {
      errors.select = "Select is Required";
    }
    if (range === 0) {
      errors.range = "Range is Required";
    }
    if (checkbox === false) {
      errors.checkbox = "Checkbox is Checked";
    }
    if (radio === false) {
      errors.radio = "Radio is Checked";
    }
    this.setState({ errors });
  };

  render() {
    const { form, errors } = this.state;
    const { handleChange, hadleSubmit, checkboxHandler } = this;
    console.log(this.state.errors);
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
                name="name"
                type="text"
                value={form.name}
                placeholder="Name"
                error={errors.name}
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

              <SignInput
                type="range"
                label="Result"
                name="range"
                value={form.range}
                error={errors.range}
                handleChange={handleChange}
              />

              <SignCheck
                name="checkbox"
                type="checkbox"
                label="Check me out"
                error={errors.checkbox}
                checked={form.checkbox}
                handleChange={checkboxHandler}
              />

              <SignCheck
                type="radio"
                name="radio"
                label="first radio"
                error={errors.radio}
                checked={form.radio}
                handleChange={checkboxHandler}
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
