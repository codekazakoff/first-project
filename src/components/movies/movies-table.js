import React, { Component } from "react";
import PropTypes from "prop-types";
import Like from "./like";
class TableMovies extends Component {
  render() {
    const { data, onDelete, onLike } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Caption</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, title, genre, stock, rate, isLiked }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{genre}</td>
                <td>{stock}</td>
                <td>{rate}</td>
                <td className="last-child">
                  <Like onLike={onLike} isLiked={isLiked} id={id} />
                  <button onClick={() => onDelete(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

TableMovies.propTypes = {
  data: PropTypes.object,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
};

export default TableMovies;
