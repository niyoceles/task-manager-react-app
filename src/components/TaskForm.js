import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/TaskAction';


class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const post ={
      title: this.state.title,
      body: this.state.body
    }
  //  call action
  this.props.createPost(post);

  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
        </div>
        <div>
          <label>Body</label>
          <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>

      </form>

    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};
export default connect(null, {createPost})(PostForm);
