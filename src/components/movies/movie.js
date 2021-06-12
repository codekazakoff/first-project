import React, { Component } from "react";
import { getMovies } from "../../services/fakeServis";

import TableMovies from "./movies-table";

import "../../css/movies/movies.css";
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: getMovies(),
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
    const movies = cinemas.find((movie) => movie.id === id);
    movies.isLiked = movies.isLiked ? false : true;
    this.setState({ cinemas });
  };
  render() {
    const { cinemas } = this.state;
    const count = cinemas.length;
    const { handleDelete, handleLike } = this;
    return (
      <>
        <section>
          {count === 0 ? (
            <h4>Bizda mahsulotlar umuman qolmagan</h4>
          ) : (
            <div>
              <h4>Bizda {count} ta mahsulot bor</h4>
              <TableMovies
                data={cinemas}
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
