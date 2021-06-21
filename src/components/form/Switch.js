import React, { Component } from "react";
import PropTypes from "prop-types";

class Switch extends Component {
  render() {
    const { isUpdate, MovieUpdate } = this.props;
    return (
      <button style={{ display: "inline-block" }} onClick={MovieUpdate}>
        {isUpdate ? "Change" : "Add"}
      </button>
    );
  }
}

Switch.propTypes = {
  isUpdate: PropTypes.bool,
  onClickUpdate: PropTypes.func,
  MovieUpdate: PropTypes.func,
};
export default Switch;
