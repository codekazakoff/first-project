import React from "react";
import PropTypes from "prop-types";
const JoiSignIn = ({ label, type, name, onChange, value, error }) => {
  return (
    <div className="form__control">
      <label htmlFor="email">{label}</label>
      <div className="form__input-group">
        <button className="form__button-btn">
          <i className="fal fa-envelope"></i>
        </button>
        <input
          id={type}
          type={type}
          placeholder={`enter your ${type}`}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <span className="errors">{error}</span>}
    </div>
  );
};

JoiSignIn.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default JoiSignIn;
