import React, { Component } from "react";
import PropTypes from "prop-types";
import ApiLike from "./ApiLike";

class ApiTableBody extends Component {
  componentDidUpdate(prevP) {
    if (this.props.data.length !== prevP.data.length) {
      console.log("Avvalgi Datalar soni bilan Hozirgisilar soni Teng Emas");
    }
  }
  componentWillUnmount() {
    console.log("Malumotlardan bittasi uchdi va u  ", this.props.data.id);
  }
  render() {
    const { data: api, onLike, onDelete, onUpdate } = this.props;
    return (
      <tbody>
        {api.map(({ id, userId, title, completed }, index) => (
          <tr key={id || index}>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>
              <ApiLike isLike={completed} onLike={onLike} id={id} />
            </td>
            <td>
              <button onClick={() => onDelete(id)}>Delete</button>
              <button onClick={() => onUpdate(id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

ApiTableBody.propTypes = {
  data: PropTypes.array,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default ApiTableBody;
