import React, { Component } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class TableMovies extends Component {
  render() {
    const { data, onDelete, onLike, MovieUpdate, movie } = this.props;
    return (
      <>
        <table>
          <TableHeader>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Caption</th>
              </tr>
            </thead>
          </TableHeader>
          <TableBody
            movie={movie}
            data={data}
            onDelete={onDelete}
            onLike={onLike}
            MovieUpdate={MovieUpdate}
          />
        </table>
      </>
    );
  }
}

TableMovies.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
  movie: PropTypes.object,
  MovieUpdate: PropTypes.func,
};

export default TableMovies;
