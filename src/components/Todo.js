import React from "react";
import "./Todo.css";
const Todo = (props) => {
  return (
    <div>
      <p>{props.todo.task}</p>
    </div>
  );
};
export default Todo;
