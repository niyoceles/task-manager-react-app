import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (

      <li className="Tasks">
        <strong>this.props.Task.title}</strong>-{this.props.Task.category}
      </li>
    );
  }
}
export default TaskItem;