import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/movies/movies.css";
import Form from "../form/Form";
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
              <a className="list-link" href="/">
                {selectGenre.genre}
              </a>
            </li>
          ))}
        </ul>
        {isUpdate && (
          <Form
            handleChange={handleChange}
            movie={movie}
            handleSubmit={handleSubmit}
          />
        )}
        <Switch isUpdate={isUpdate} MovieUpdate={MovieUpdate} />
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
