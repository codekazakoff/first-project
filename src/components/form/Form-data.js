import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/form/form.css";
import Input from "./Input";
class FormData extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      movie: { title, stock, rate, isLiked, genre },
    } = this.props;
    console.log(isLiked);
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <Input
            name="title"
            id="title"
            label="Title"
            autoFocus
            value={title}
            onChange={handleChange}
            className="form__title input"
            placeholder="Enter Your Title"
          />
          <div className="form__data">
            <label htmlFor="genre" className="form__label">
              Genre
            </label>
            <select
              name="genre"
              id="genre"
              value={genre}
              onChange={handleChange}
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

          <Input
            name="stock"
            id="stock"
            label="Stock"
            type="number"
            value={stock}
            onChange={handleChange}
            className="form__title number"
            placeholder="Enter Your Stock"
          />
          <Input
            name="rate"
            id="rate"
            label="Rate"
            type="number"
            value={rate}
            onChange={handleChange}
            className="form__title number"
            placeholder="Enter Your Rate"
          />

          <div className="form__data">
            <label htmlFor="Liked" className="form__label radio__label">
              Liked
            </label>
            <input
              type="radio"
              name="isLiked"
              id="Liked"
              value="true"
              onChange={handleChange}
              className="form__title radio"
            />

            <label htmlFor="isLiked" className="form__label radio__label">
              isLiked
            </label>
            <input
              type="radio"
              name="isLiked"
              id="isLiked"
              value="false"
              onChange={handleChange}
              className="form__title radio"
            />
          </div>

          <div className="form__data">
            <button type="submit" className="form__submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormData.propTypes = {
  movie: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormData;
