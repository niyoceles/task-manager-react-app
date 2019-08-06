import React, { Component } from 'react';
import uuid from 'uuid';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    this.setState({
      tasks: [{
        id: uuid.v4(),
        title: 'Writing story on pivot traker',
        category: 'Writing story'
      },
      {
        id: uuid.v4(),
        title: 'Designing UI',
        category: 'Development design'
      },
      {
        id: uuid.v4(),
        title: 'Designing API',
        category: 'backend development'
      },]
    })
  }

  addTaskHandle(task) {
    // console.log(task);
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks: tasks })
  }

  handleDeleteTask(id) {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === 'id');
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  render() {
    let TaskItems;
      TaskItems = this.state.tasks.map(task => {
        return (
          <TaskItem onDelete={this.handleDeleteTask.bind(this)} key={task.title} Task={task} />
        );
      });
    return (
      <div className="Tasks" >
         <AddTask addTask={this.addTaskHandle.bind(this)} />
        My Tasks
        {TaskItems}
      </div>
    );
  }
}
export default Tasks;