import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
const SignCheck = ({ type, label, name, checked, handleChange, error }) => {
  return (
    <Form.Group className="mt-2">
      <Form.Check
        className="checkbox"
        type={type}
        label={label}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      {error && <span className="errors">{error}</span>}
    </Form.Group>
  );
};

SignCheck.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};
export default SignCheck;
