import React, { Component } from 'react'

import './css/main.css';

class TodoApp extends Component {

    state = {
        input : '',
    }

  render() {
    return (
      <>
        <div class="container-fluid">
            <div class="todo-app">
                <div class="app-header">
                    <h1>Todo App</h1>
                </div>
                <div class="app-body">
                    <form action="">
                        <div class="form-control">
                            <input type="text" placeholder="Add your new todo"/>
                            <button type="submit">
                                <i class="fa fa-plus">
                                </i>
                            </button>
                        </div>
                        <div class="form-control-two">
                            <input type="text" placeholder="Add your new todo" class="input" />
                            <button class="submit-first" type="submit">
                            <i class="fas fa-marker"></i>
                            </button>
                            <button class="submit-last"  type="submit">
                            <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
    )
  }
}
export default TodoApp;