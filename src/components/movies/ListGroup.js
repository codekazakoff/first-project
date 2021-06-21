import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/movies/movies.css";
import Form from "../../container/Form/Form";
import Switch from "../form/Switch";
class ListGroup extends Component {
  render() {
    const { selectGenre, handleSelectMovie, isUpdate, MovieUpdate } =
      this.props;
    return (
      <div className="list-display">
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
        <Switch isUpdate={isUpdate} MovieUpdate={MovieUpdate} />
        {isUpdate && <Form />}
      </div>
    );
  }
}
ListGroup.propTypes = {
  selectGenre: PropTypes.array,
  handleSelectMovie: PropTypes.func,
  MovieUpdate: PropTypes.func,
  isUpdate: PropTypes.bool,
};
export default ListGroup;
