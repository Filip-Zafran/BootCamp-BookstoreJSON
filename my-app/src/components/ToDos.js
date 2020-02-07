import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class ToDos extends Component {
  render() {
    console.log("this.props", this.props);
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PRoptypes
ToDos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ToDos;
