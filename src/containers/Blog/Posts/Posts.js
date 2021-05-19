import React from 'react';
import axios from '../../../axios';
import './posts.css';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('/posts').then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: 'Max',
        };
      });
      this.setState({ posts: updatedPosts });
      // console.log( response );
    });
  }

  postSelectedHandler = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className='Posts'>{posts}</section>
        <Route
          path={`${this.props.match.url}/:id`}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
