import React, { Component } from "react";
import PropTypes from "prop-types";
import FormData from "../../container/Form/Form-data";

class Form extends Component {
  render() {
    const { handleChange, movie, handleSubmit } = this.props;
    return (
      <>
        <FormData
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          movie={movie}
        />
      </>
    );
  }
}
Form.propTypes = {
  movie: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
export default Form;
