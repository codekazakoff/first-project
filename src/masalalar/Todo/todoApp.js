import React, { Component } from "react";

import "../../css/todo/todo.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    if(value.trim() !== 0){
    }
  };
  handleAddTodo =()=>{
      const {input} = this.state;
        console.log(input);
  }

  render() {
      const {handleInputChange,handleAddTodo} = this;


    return (
      <>
        <div className="wrapper">
          <div className="todo-header">Todo App</div>
          <div className="todo-body">
            <input type="text" placeholder="Add your new todo" 
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <ul className="todo-list"></ul>
          <div className="footer">
            <span>
              You have
              <span className="count"></span>
              pending tasks
            </span>
            <button>Clear All</button>
          </div>
        </div>
      </>
    );
  }
}
export default TodoApp;
