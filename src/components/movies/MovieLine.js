import React, { Component } from "react";
import PropTypes from "prop-types";
import Like from "./Like";
export default class MovieLine extends Component {
  render() {
    const { item, onLike, onDelete, handleUpdateMovieUpdate } = this.props;
    return (
      <>
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.genre}</td>
          <td>{item.stock}</td>
          <td>{item.rate}</td>
          <td className="last-child">
            <Like onLike={onLike} isLiked={item.isLiked} id={item.id} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button
              onClick={() => handleUpdateMovieUpdate(item.id)}
              className="update"
            >
              Update
            </button>
          </td>
        </tr>
      </>
    );
  }
}
MovieLine.propTypes = {
  item: PropTypes.object,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
  handleUpdateMovieUpdate: PropTypes.func,
};
