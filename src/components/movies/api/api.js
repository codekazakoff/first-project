import React, { Component } from "react";
import "../../../css/api/api.css";
import ApiTableHeader from "./ApiTableHeader";
import ApiTableBody from "./ApiTableBody";

const url = "http://jsonplaceholder.typicode.com/todos";

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["salom"],
    };
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
    console.log(id);
  };
  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { handleLike, handleDelete, handleUpdate } = this;
    return (
      <>
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
      </>
    );
  }
}

export default Api;
