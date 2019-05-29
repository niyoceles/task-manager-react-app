import React, { Component } from 'react';

class TaskItem extends Component {
  deleteHandle(id) {
    this.props.onDelete(id)

  }
  render() {
    return (

      <li className="Tasks">
        <strong>{this.props.Task.title}</strong>-{this.props.Task.category} <a href onClick={this.deleteHandle.bind(this, this.props.Task.id)}> <button>Delete</button></a>
      </li>
    );
  }
}
export default TaskItem;