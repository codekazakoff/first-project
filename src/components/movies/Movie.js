import React, { Component } from "react";
import { getMovies } from "../../db/fakeServis";
import { selectGenreOne } from "../../db/fakeTypeMovies";
import TableMovies from "./MoviesTable";
import ListGroup from "./ListGroup";
import "../../css/movies/movies.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: getMovies(),
      selectGenre: selectGenreOne(),
      selectedGenre: {
        genre: "Barchasi",
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

  filterRender = () => {
    const { selectedGenre, cinemas } = this.state;
    const filter =
      selectedGenre?.genre !== "Barchasi"
        ? cinemas.filter((cinema) => cinema.genre === selectedGenre.genre)
        : cinemas;
    return filter;
  };

  render() {
    const { selectGenre } = this.state;
    const { handleDelete, handleLike, handleSelectMovie, filterRender } = this;

    filterRender();

    const count = filterRender().length;
    console.log(filterRender());
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
                data={filterRender()}
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
