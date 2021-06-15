import React, { Component } from "react";
import PropTypes from "prop-types";
class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.children,
    };
  }
  render() {
    console.log(this.props.children, "table handler");
    return <>{this.state.movies }</>;
  }
}
TableHeader.propTypes = {
  children: PropTypes.object,
};
export default TableHeader;
