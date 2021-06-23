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
      cinemas: getMovies(),
      selectGenre: selectGenreOne(),
      isUpdate: false,
      selectedGenre: {
        genre: "Barchasi",
      },
      movie: {
        title: "",
        genre: "",
        stock: "",
        rate: "",
        isLiked: true,
      },
    };
  }

  handleDelete = (id) => {
    const { cinemas } = this.state;
    this.setState({
      cinemas: cinemas.filter((cinema) => cinema.id !== id),
    });
  };

  handleLike = (id) => {
    const { cinemas } = this.state;
    const movies = cinemas.map((movie) =>
      movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie
    );
    this.setState({ cinemas: movies });
  };

  handleSelectMovie = (selectedGenre) => {
    this.setState({ selectedGenre });
  };

  handleUpdateMovie = (id) => {
    const { cinemas, movie } = this.state;
    const cinema = cinemas.map((item) =>
      item.id === id ? { ...item, ...movie } : item
    );
    console.log(id);
    const { isUpdate } = this.state;
    this.setState({ isUpdate: !isUpdate, cinemas: cinema });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      cinemas: [
        { ...prevState.movie, id: prevState.cinemas.length + 1 },
        ...prevState.cinemas,
      ],
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      movie: {
        ...this.state.movie,
        [name]: value === "true" ? true : value === "false" ? false : value,
      },
    });
    console.log(this.state.movie);
  };

  filterRender = () => {
    const { selectedGenre, cinemas } = this.state;
    const filter =
      selectedGenre?.genre !== "Barchasi"
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
                MovieUpdate={handleUpdateMovie}
              />
            </>
          )}
        </section>
      </>
    );
  }
}

export default Movies;
