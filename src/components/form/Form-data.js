import React, { Component } from "react";
import "../../css/form/form.css";
import Input from "./Input";
class FormData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: "",
        genre: "",
        stock: "",
        rate: "",
        isLike: true,
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ movie: { ...this.state.movie, [name]: value } });
  };

  render() {
    const { handleSubmit, handleChange } = this;

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <Input
            name="title"
            id="title"
            label="Title"
            autoFocus
            // value={title}
            onChange={handleChange}
            className="form__title input"
            placeholder="Enter Your Title"
          />
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

          <Input
            name="stock"
            id="stock"
            label="Stock"
            type="number"
            // value={stock}
            onChange={handleChange}
            className="form__title number"
            placeholder="Enter Your Stock"
          />
          <Input
            name="rate"
            id="rate"
            label="Rate"
            type="number"
            // value={rate}
            onChange={handleChange}
            className="form__title number"
            placeholder="Enter Your Rate"
          />

          <div className="form__data">
            <label htmlFor="isLike" className="form__label radio__label">
              isLike
            </label>
            <input
              type="radio"
              name="isLike"
              id="isLike"
              onChange={handleChange}
              className="form__title radio"
            />

            <label htmlFor="like" className="form__label radio__label">
              Like
            </label>
            <input
              type="radio"
              name="isLike"
              id="like"
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

export default FormData;
