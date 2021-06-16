import React, { Component } from "react";
import { getMovies } from "../../db/fakeServis";
// import { selectGenreOne } from "../../db/fakeTypeMovies";
import TableMovies from "./MoviesTable";
import ListGroup from "./ListGroup";
import "../../css/movies/movies.css";

const selectGenreMovie = [
  {
    genre: "Barchasi",
  },
  {
    id: "11",
    genre: "Action",
  },
  {
    id: "12",
    genre: "Thriller",
  },
  {
    id: "13",
    genre: "Comedy",
  },
];
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: getMovies(),
      // selectGenre: selectGenreOne(),
      selectGenre: selectGenreMovie,
      selectedGenre: {} || null,
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

  render() {
    const { cinemas, selectGenre, selectedGenre } = this.state;

    const filter = selectedGenre.id
      ? cinemas.filter((cinema) => cinema.genre === selectedGenre.genre)
      : cinemas;

    const count = cinemas.length;
    const { handleDelete, handleLike, handleSelectMovie } = this;
    return (
      <>
        <section>
          {count === 0 ? (
            <h4>Bizda mahsulotlar umuman qolmagan</h4>
          ) : (
            <div>
              <h4>Bizda {count} ta mahsulot bor</h4>
              <ListGroup
                selectGenre={selectGenre}
                handleSelectMovie={handleSelectMovie}
              />
              <TableMovies
                data={filter}
                onDelete={handleDelete}
                onLike={handleLike}
              />
            </div>
          )}
        </section>
      </>
    );
  }
}

export default Movies;
