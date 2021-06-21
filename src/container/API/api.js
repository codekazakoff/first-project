import React, { Component } from "react";
import Loader from "react-loader-spinner";
import ApiTableHeader from "../../components/movies/api/ApiTableHeader";
import ApiTableBody from "../../components/movies/api/ApiTableBody";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../../css/api/api.css";

const url = "http://jsonplaceholder.typicode.com/todos";

class Api extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ data, isLoading: false });
    } catch (err) {
      console.log(err.message);
    }
  }

  handleLike = (id) => {
    const { data } = this.state;
    const user = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    this.setState({ data: user });
  };

  handleDelete = (id) => {
    const { data } = this.state;
    const deleted = data.filter((item) => item.id !== id);
    this.setState({ data: deleted });
  };

  handleUpdate = (id) => {
    const { data } = this.state;
    const description = { userId: 1, id: 1, title: "Salom", completed: true };
    const update = data.map((item) =>
      item.id === id ? (item = description) : item
    );
    this.setState({ data: update });
  };

  render() {
    const { data } = this.state;
    const { handleLike, handleDelete, handleUpdate } = this;
    if (this.state.isLoading) {
      return (
        <Loader
          className="loader"
          type="MutatingDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <table>
              <ApiTableHeader />
              <ApiTableBody
                data={data}
                onLike={handleLike}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Api;
