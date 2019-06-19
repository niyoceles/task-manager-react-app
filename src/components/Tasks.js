import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {
  deleteTask(id) {
    this.props.onDelete(id);
  }
  render() {
    // console.log(this.props.Tasks[0].title)
    let TaskItems;
    if (this.props.Tasks) {
      TaskItems = this.props.Tasks.map(task => {
        return (
          <TaskItem onDelete={this.deleteTask.bind(this)} key={task.title} Task={task} />
        );
      });
    }
    return (
      <div className="Tasks" >
        My Tasks
        {TaskItems}
      </div>
    );
  }
}
export default Tasks;