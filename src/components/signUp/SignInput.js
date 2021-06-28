import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const SignInput = ({
  type,
  label,
  placeholder,
  handleChange,
  name,
  value,
  error,
}) => {
  return type === "select" ? (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>{label}</Form.Label>
      <Form.Control as={type} name={name} value={value} onChange={handleChange}>
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
      {error && <span className="errors">{error}</span>}
    </Form.Group>
  ) : (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${type === "range" ? "mt-2" : "mb-1"}`}
        onChange={handleChange}
        name={name}
      />
      {error && <span className="errors">{error}</span>}
    </Form.Group>
  );
};

SignInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SignInput;
