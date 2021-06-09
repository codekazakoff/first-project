import React, { Component } from 'react'

import '../css/todo/todo.css';

class TodoApp extends Component {

   constructor(props) {
       super(props);

       this.state = {
        input : '',
    }

   }

    handleInputChange =(e)=>{
        const value = e.target.value;
        
    }

  render() {
    return (
      <>
          <div class="wrapper">
                <div class="todo-header">
                    Todo App
                </div>
                <div class="todo-body">
                    <input type="text" placeholder="Add your new todo"/>
                    <button>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <ul class="todo-list">

                </ul>
                <div class="footer">
                    <span>You have
                        <span class="count"></span>
                        pending tasks
                    </span>
                    <button>Clear All</button>
                </div>
            </div>
      </>
    )
  }
}
export default TodoApp;