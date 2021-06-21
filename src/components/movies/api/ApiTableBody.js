import React, { Component } from "react";
import PropTypes from "prop-types";
import TbodyApi from "./TbodyApi";

class ApiTableBody extends Component {
  componentDidUpdate(prevP) {
    if (this.props.data.length !== prevP.data.length) {
      console.log("Avvalgi Datalar soni bilan Hozirgisilar soni Teng Emas");
    }
  }

  render() {
    const { data: api, onLike, onDelete, onUpdate } = this.props;
    return (
      <tbody>
        <TbodyApi
          api={api}
          onLike={onLike}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
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
