import React, { Component } from 'react';
import Counter from './components/counter';
import Tasks from './components/Tasks1';
import Posts from './components/Tasks'
import PostForm from './components/TaskForm'
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store';

class App extends Component {

  render() {
    return (
      <Provider store= {store}>
      <div className="App" >
        <Counter store={store} />
        <h3>My Task waiting to be done</h3>
        <Tasks />
        <h1>Creating Post</h1>
        <PostForm />
        <h1>Posts</h1>
        <Posts />
      </div>
      </Provider>
    );
  }
}


export default App;
