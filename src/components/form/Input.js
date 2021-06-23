import React from "react";
import PropTypes from "prop-types";
const Input = ({
  id,
  name,
  type,
  label,
  onChange,
  autoFocus,
  className,
  placeholder,
}) => {
  return (
    <div className="form__data">
      <label htmlFor="title" className="form__label">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        id={id}
        autoFocus={autoFocus && autoFocus}
        //   value={title}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Input;
