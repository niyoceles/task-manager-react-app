import React, { Component } from 'react';
import Tasks from './components/Tasks';
import './App.css';
import AddProject from './components/AddTask';

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
        title: 'Writing story on pivot traker',
        category: 'Writing story'
      },
      {
        title: 'Designing UI',
        category: 'Development design'
      },
      {
        title: 'Designing API',
        category: 'backend development'
      },]
    })
  }
  render() {
    return (
      <div className="App" >
        My App
      <Tasks Tasks={this.state.tasks} />
        <AddProject />
      </div>
    );
  }
}


export default App;
