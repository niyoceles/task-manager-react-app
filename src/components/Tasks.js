import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchTask} from '../actions/TaskAction';

class Posts extends Component {

  componentWillMount() {
   this.props.fetchTask();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newTask){
    this.props.taskRedxxxx.unshift(nextProps.newTask);
    }

  }

  render() {
    const PostItem = this.props.taskRedxxxx.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        {post.body}
      </div>
    ))
    return (
      <div>
        Posts
        {PostItem}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchTask: PropTypes.func.isRequired,
  Posts: PropTypes.array.isRequired,
  newTask:PropTypes.object
};
const mapStateToProps = state =>({
  taskRedxxxx: state.taskRedxxxx.items,
  newTask: state.newTask.item,
});
export default connect(mapStateToProps, {fetchTask})(Posts);