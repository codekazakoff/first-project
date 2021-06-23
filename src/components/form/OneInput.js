import React from "react";
import PropTypes from "prop-types";

const OneInput = ({
  name,
  onChange,
  type = "text",
  value,
  className,
  placeholder,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

OneInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default OneInput;
