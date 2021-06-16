import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/movies/movies.css";
class ListGroup extends Component {
  render() {
    const { selectGenre, handleSelectMovie } = this.props;
    return (
      <ul className="list-group">
        {selectGenre.map((selectGenre) => (
          <li
            className="list-item"
            onClick={() => handleSelectMovie(selectGenre)}
            key={selectGenre.genre}
          >
            <a className="list-link" href="#all">
              {selectGenre.genre}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
ListGroup.propTypes = {
  selectGenre: PropTypes.array,
  handleSelectMovie: PropTypes.func,
};
export default ListGroup;
