import React from "react";
import PropTypes from "prop-types";
const Select = ({
  value,
  onChange,
  title,
  isSelect,
  titleRadioOne,
  titleRadioTwo,
}) => {
  return isSelect ? (
    <div className="form__data">
      <label htmlFor="genre" className="form__label">
        {title}
      </label>
      <select
        name="genre"
        id="genre"
        value={value}
        onChange={onChange}
        className="form__select select"
      >
        <option value="action" className="form__option">
          Action
        </option>
        <option value="comedy" className="form__option">
          Comedy  
        </option>
        <option value="thriller" className="form__option">
          Thriller
        </option>
      </select>
    </div>
  ) : (
    <div className="form__data">
      <label htmlFor="Liked" className="form__label radio__label">
        {titleRadioOne}
      </label>
      <input
        type="radio"
        name="isLiked"
        id="Liked"
        value="true"
        onChange={onChange}
        className="form__title radio"
      />

      <label htmlFor="isLiked" className="form__label radio__label">
        {titleRadioTwo}
      </label>
      
      <input
        type="radio"
        name="isLiked"
        id="isLiked"
        value="false"
        onChange={onChange}
        className="form__title radio"
      />
    </div>
  );
};

Select.propTypes = {
  isSelect: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
  titleRadioOne: PropTypes.string,
  titleRadioTwo: PropTypes.string,
};

export default Select;
