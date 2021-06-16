import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieLine from "./MovieLine";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onLike, data, onDelete } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <MovieLine
            key={item.id}
            item={item}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
};

export default TableBody;
