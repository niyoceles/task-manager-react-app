import React, { Component } from 'react';
import Tasks from './components/Tasks';
import uuid from 'uuid';
import './App.css';
import AddTask from './components/AddTask';

class App extends Component {
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
  render() {
    return (
      <div className="App" >
        <h3>My Task waiting to be done</h3>
        <AddTask addTask={this.addTaskHandle.bind(this)} />
        <Tasks Tasks={this.state.tasks} />

      </div>
    );
  }
}


export default App;
