import React, { Component } from "react";
import PropTypes from "prop-types";
import TableHeader from "./table-header";
import TableBody from "./table-body";

class TableMovies extends Component {
  render() {
    const { data, onDelete, onLike } = this.props;
    return (
      <>
        <table>
          <TableHeader />
          <TableBody data={data} onDelete={onDelete} onLike={onLike} />
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
