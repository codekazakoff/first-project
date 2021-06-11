import React, { Component } from "react";

import "../../css/todo/todo.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueOff: "",
      todos: [],
      id: 0,
    };
  }
  handleInputChange = (e) => {
    this.setState({
      valueOff: e.target.value
    })
  }
  onSubmit = (e) => {
    const { valueOff, id, todos } = this.state;

    e.preventDefault();
    let todo = {
      id: id,
      value: valueOff,
    }
    this.setState({
      todos: [...todos, todo],
      id: id + 1,
      valueOff: '',
    })
  }
  onDelete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(item => (
        item.id !== id
      ))
    })
  }
  onDeleteAllTodo = () => {
    this.setState({
      todos: []
    })
  }

  render() {
    const { handleInputChange, onSubmit, onDelete, onDeleteAllTodo } = this;
    const { todos, valueOff} = this.state;
    return (
      <>
        <div className="wrapper">
          <div className="todo-header">
            Todo App
        </div>
          <form onSubmit={onSubmit} className="todo-body">
            <input value={valueOff} required type="text" placeholder="Add your new todo" onChange={handleInputChange} />
            <button className={valueOff !== '' ? 'btn active' : 'btn'}>
              <i className="fas fa-plus"></i>
            </button>
          </form>
          { todos.map(({ id, value }) => (
            <ul className="todo-list" key={id}>
              <li>
                {value}
                <span className="icon" onClick={() => onDelete(id)}>
                  <i className="fas fa-trash"></i>
                </span>
              </li>
            </ul>
          ))}
          <div className="footer">
            <span>You have
                <span className="count"></span>
                pending tasks
            </span>
            <button onClick={onDeleteAllTodo} className={valueOff === '' ? 'btn active' : 'btn'}>Clear All</button>
          </div>
        </div>

      </>
    );
  }
}
export default TodoApp;
