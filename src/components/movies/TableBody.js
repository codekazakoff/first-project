import React, { Component } from "react";
import PropTypes from "prop-types";
import Like from "./Like";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onLike, data, onDelete } = this.props;
    return (
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
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
};

export default TableBody;
