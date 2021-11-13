import React, { Component } from "react";
import PropTypes from "prop-types";

class Switch extends Component {
  render() {
    const { isUpdate, onUpdate } = this.props;
    return (
      <button style={{ display: "inline-block" }} onClick={onUpdate}>
        {isUpdate ? "Change" : "Add"} 
      </button>
    );
  }
}

Switch.propTypes = {
  isUpdate: PropTypes.bool,
  onUpdate: PropTypes.func,
};
export default Switch;
