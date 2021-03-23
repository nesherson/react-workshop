import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom';

function BlogPost() {
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <button type='button' onClick={handleClick}>
      Go home
    </button>
  );
}

function HomePage() {
  const { homepage } = useParams();
  return <h2>Home Page -- {homepage}</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/blogpost'>Blog Post</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/blogpost'>
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
