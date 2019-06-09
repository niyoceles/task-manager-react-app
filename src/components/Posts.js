import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const PostItem = this.state.posts.map(post => (
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
export default Posts;