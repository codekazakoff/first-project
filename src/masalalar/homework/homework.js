import React, { Component } from "react";
import "../../css/homework/homework.css";
import { getMovies } from "../../services/fakeServis";
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import like from "../../assists/img/like.png";
import dislike from "../../assists/img/dislike.png";
class HomeWork extends Component {
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
    const movies = cinemas.find( movie => movie.id === id);
    movies.isLiked = movies.isLiked ? false : true;
    this.setState({ cinemas});
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
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Caption</th>
                  </tr>
                </thead>
                <tbody>
                  {cinemas.map(({ id, title, genre, stock, rate, isLiked }) => (
                    <tr key={id}>
                      <td>{title}</td>
                      <td>{genre}</td>
                      <td>{stock}</td>
                      <td>{rate}</td>
                      <td style={{cursor : 'pointer'}}>
                        <span onClick={() => handleLike(id)}>
                        {isLiked ? <AiOutlineHeart  size="2rem" color="red"/> : <AiFillHeart size="2rem" color="red"/>}
                        </span>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </>
    );
  }
}
export default HomeWork;
