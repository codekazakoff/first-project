import React, { Component } from "react";
import "../../css/homework/homework.css";
import {getMovies} from "../../services/fakeServis";

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
  render() {
    const { cinemas } = this.state;
    const count = cinemas.length;
    const { handleDelete } = this;
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
                {cinemas.map(({ id, title, genre, stock, rate }) => (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{genre}</td>
                    <td>{stock}</td>
                    <td>{rate}</td>
                    <td>
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
