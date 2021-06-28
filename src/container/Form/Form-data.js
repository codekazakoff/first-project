import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/form/form.css";
import Input from "../../components/form/Input";
import Select from "../../components/form/select";
class FormData extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      movie: { title, stock, rate, genre },
    } = this.props;
    //  console.log(isLiked);
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
          <Select
            value={genre}
            onChange={handleChange}
            title="Genre"
            isSelect
          />

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
          <Select
            onChange={handleChange}
            titleRadioOne="isLiked"
            titleRadioTwo="Liked"
          />

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
