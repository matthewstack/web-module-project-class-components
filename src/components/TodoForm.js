import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChanges} type="text" name="todo" />
        <button onClick={this.handleClick}>Add ToDo</button>
      </form>
    );
  }
}

export default TodoForm;
