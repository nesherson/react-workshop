import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/posts/'>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to='/new-post'>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/posts' component={Posts} />
          <Route path='/new-post' component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
