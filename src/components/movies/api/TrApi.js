import React, { Component } from "react";
import PropTypes from "prop-types";
import ApiLike from "./ApiLike";

class TrApi extends Component {
  componentWillUnmount() {
    console.log("Malumotlardan bittasi uchdi va u  ", this.props.id);
  }

  render() {
    const { index, onLike, onDelete, onUpdate, id, userId, title, completed } =
      this.props;
    return (
      <tr key={id || index}>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <ApiLike isLiked={completed} onLike={onLike} id={id} />
        </td>
        <td>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onUpdate(id)}>Update</button>
        </td>
      </tr>
    );
  }
}
TrApi.propTypes = {
  api: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onLike: PropTypes.func,
  id: PropTypes.number,
  index: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default TrApi;
