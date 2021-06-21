import React, { Component } from "react";
import "../../css/form/form.css";
class FormData extends Component {
  render() {
    return (
      <div className="form-container">
        <form action="" className="form">
          <div className="form__data">
            <label htmlFor="title" className="form__label">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              autoFocus
              className="form__title input"
              placeholder="Enter Your Title"
            />
          </div>

          <div className="form__data">
            <label htmlFor="genre" className="form__label">
              Genre
            </label>
            <select name="genre" id="genre" className="form__select select">
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

          <div className="form__data">
            <label htmlFor="stock" className="form__label">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              className="form__title number"
              placeholder="Enter Your Stock"
            />
          </div>

          <div className="form__data">
            <label htmlFor="rate" className="form__label">
              Rate
            </label>
            <input
              type="number"
              name="rate"
              id="rate"
              className="form__title number"
              placeholder="Enter Your Rate"
            />
          </div>

          <div className="form__data">
            <label htmlFor="isLike" className="form__label radio__label">
              isLike
            </label>
            <input
              type="radio"
              name="isLike"
              id="isLike"
              className="form__title radio"
            />

            <label htmlFor="like" className="form__label radio__label">
              Like
            </label>
            <input
              type="radio"
              name="isLike"
              id="like"
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

export default FormData;
