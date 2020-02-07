import React, { Component } from "react";
import Header from "./components/layout/header.js";
import ToDos from "./components/ToDos.js";
import AddTodo from "./components/AddTodo.js";

import "./App.css";

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Do trash",
        completed: false
      },
      {
        id: 2,
        title: "Do dinner",
        completed: true
      },
      {
        id: 3,
        title: "Do boss",
        completed: false
      }
    ]
  };

  // toggle complete

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  //DELETE TODO
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // add Todo

  addTodo = title => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <ToDos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />{" "}
        </div>
      </div>
    );
  }
}

export default App;
