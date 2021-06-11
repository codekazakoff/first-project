import React, { Component } from "react";

import "../../css/todo/todo.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todos: [],
      id: "",
    };
  }
  handleInputChange =(e)=> {
    this.setState({
      input : e.target.value
    })
    // console.log();
  }
  onSubmit =(e)=>{
    e.preventDefault(); 
    let todo = {
      id: this.state.id,
      input : this.state.input,
    }
    this.setState({
      todos : this.state.todos.concat(todo),
      id : this.state.id + 1,
    })
  }

  render() {
    const {handleInputChange,onSubmit} = this;
    return (
      <>
        <section>
          <div className="container">
            <form onSubmit={onSubmit}>
              <div className="form-controls">
              <h1>Todo App</h1>
                <input
                  type="text"
                  required
                  placeholder="Enter your todo text"
                  id="id"
                  onChange={handleInputChange}
                />
                <button >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </form>
            <table>
              <tbody>
                {this.state.todos.map(todo => (
                  <tr key={todo.id}>
                    <td>{todo.input}</td>
                    <td><button>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
           </div> 
        </section>
      </>
    );
  }
}
export default TodoApp;
