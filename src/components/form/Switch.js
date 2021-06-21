import React, { Component } from "react";
import PropTypes from "prop-types";

class Switch extends Component {
  render() {
    const { isUpdate, onClickUpdate } = this.props;
    return (
      <button style={{ display: "inline-block" }} onClick={onClickUpdate}>
        {isUpdate ? "Change" : "Edit"}
      </button>
    );
  }
}

Switch.propTypes = {
  isUpdate: PropTypes.bool,
  onClickUpdate: PropTypes.func,
};
export default Switch;
