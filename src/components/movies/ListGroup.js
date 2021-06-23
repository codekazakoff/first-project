import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/movies/movies.css";
import Form from "../../container/Form/Form";
import Switch from "../form/Switch";
class ListGroup extends Component {
  render() {
    const {
      movie,
      isUpdate,
      MovieUpdate,
      selectGenre,
      handleSubmit,
      handleChange,
      handleSelectMovie,
    } = this.props;
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
        {isUpdate && (
          <Form
            handleChange={handleChange}
            movie={movie}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    );
  }
}
ListGroup.propTypes = {
  movie: PropTypes.object,
  isUpdate: PropTypes.bool,
  MovieUpdate: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  selectGenre: PropTypes.array,
  handleSelectMovie: PropTypes.func,
};
export default ListGroup;
