import React, { Component } from "react";
import { getMovies } from "../../db/fakeServis";
import { selectGenreOne } from "../../db/fakeTypeMovies";
import TableMovies from "../../components/movies/MoviesTable";
import ListGroup from "../../components/movies/ListGroup";

import "../../css/movies/movies.css";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: {
        genre: "barchasi",
      },
      selectGenre: selectGenreOne(),
      cinemas: getMovies(),
      isUpdate: false,
      movie: {
        title: "",
        genre: "",
        stock: "",
        rate: "",
        isLiked: true,
      },
      errors: {},
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      cinemas: prevState.cinemas.filter((cinema) => cinema.id !== id),
    }));
  };

  handleLike = (id) => {
    this.setState((prevState) => ({
      cinemas: prevState.cinemas.map((movie) =>
        movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie
      ),
    }));
  };

  handleSelectMovie = (selectedGenre) => {
    this.setState({ selectedGenre });
  };

  handleUpdateMovieUpdate = (id) => {
    const { isUpdate } = this.state;
    this.setState({ isUpdate: !isUpdate });
    console.log(id);
  };
  handleUpdateMovie = () => {
    const { isUpdate } = this.state;
    this.setState({ isUpdate: !isUpdate });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      cinemas: [
        ...prevState.cinemas,
        { ...prevState.movie, id: prevState.cinemas.length + 1 },
      ],
      isUpdate: !prevState.isUpdate,
    }));
    //  console.log(this.state.isUpdate.value);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      movie: {
        ...this.state.movie,
        [name]: value === "true" ? true : value === "false" ? false : value,
      },
    });
  };

  filterRender = () => {
    const { selectedGenre, cinemas } = this.state;
    const filter =
      selectedGenre?.genre !== "barchasi"
        ? cinemas.filter((cinema) => cinema.genre === selectedGenre.genre)
        : cinemas;
    return filter;
  };

  render() {
    const { selectGenre, isUpdate, movie } = this.state;
    const {
      handleDelete,
      handleLike,
      handleSelectMovie,
      handleUpdateMovie,
      filterRender,
      handleChange,
      handleSubmit,
      handleUpdateMovieUpdate,
    } = this;

    filterRender();
    const count = filterRender().length;

    return (
      <>
        <section>
          {count === 0 ? (
            <h4>Bizda mahsulotlar umuman qolmagan</h4>
          ) : (
            <>
              <h4>Bizda {count} ta mahsulot bor</h4>
              <ListGroup
                selectGenre={selectGenre}
                handleSelectMovie={handleSelectMovie}
                isUpdate={isUpdate}
                MovieUpdate={handleUpdateMovie}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                movie={movie}
              />
              <TableMovies
                data={filterRender()}
                onDelete={handleDelete}
                onLike={handleLike}
                handleUpdateMovieUpdate={handleUpdateMovieUpdate}
              />
            </>
          )}
        </section>
      </>
    );
  }
}

export default Movies;
