import React, { Component } from 'react';
import uuid from 'uuid';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {}
    }
    this.defautOption = {
      categories: ['Writing story', 'Development design', 'backend development',]
    }
  }

  submitHandle(e) {
    e.preventDefault();
    if (this.refs.title.value === '') {
      alert('Task title is required')
    } else {
      this.setState({
        newTask: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function () {
        // console.log(this.state);
        this.props.addTask(this.state.newTask);
      })
    }
  }

  render() {
    let categoryOption = this.defautOption.categories.map(category => {
      return <option key={category} value={category}>{category} </option>
    })
    return (
      <div>
        <h3>Add new Task </h3>
        <form onSubmit={this.submitHandle.bind(this)}>
          <div>
            <label>Task Name/Title</label>
            <input type="text" ref="title" />
            <br></br>
            <label>Category</label>
            <select ref="category" required>
              <option value=""> Select Category</option>
              {categoryOption}
            </select>
            <br></br>
            <br></br>
            <input type="submit" value="submit" />
          </div>
          <br></br>
        </form>

      </div>
    );
  }
}
export default AddTask;