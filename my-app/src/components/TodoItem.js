import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    //     if (this.props.todo.completed) {
    //       return {
    //         textDecoration: "line-through"
    //       };
    //     } else {
    //       return {
    //         textDecoration: "none"
    //       };
    //     }
    //   };

    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* // WE NEED TO ADD AN EVENT: markComplete*/}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PRoptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "grey",
  color: "blue",
  padding: "5px 10px",
  borderRadius: "50%",
  float: "right"
};

export default TodoItem;
