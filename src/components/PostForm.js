import React, { Component } from 'react'

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
    this.setState({ [e.target.value]: e.target.name })

  }

  onSubmit(e) {

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
export default PostForm;
