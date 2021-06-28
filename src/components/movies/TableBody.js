import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieLine from "./MovieLine";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onLike, data, onDelete, MovieUpdate, isUpdate } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <MovieLine
            key={item.id}
            item={item}
            isUpdate={isUpdate}
            onDelete={onDelete}
            onLike={onLike}
            MovieUpdate={MovieUpdate}
          />
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.array,
  isUpdate: PropTypes.bool,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
  movie: PropTypes.object,
  MovieUpdate: PropTypes.func,
};

export default TableBody;
