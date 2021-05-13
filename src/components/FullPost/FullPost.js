import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      )
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
          .then((resp) => {
            const post = resp.data;
            const updatedPost = {
              ...post,
              author: 'Nesh',
            };
            this.setState({ loadedPost: updatedPost });
          });
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.id && !this.state.loadedPost) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      const title = this.state.loadedPost.title;
      const content = this.state.loadedPost.body;
      post = (
        <div className='FullPost'>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className='Edit'>
            <button className='Delete'>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
