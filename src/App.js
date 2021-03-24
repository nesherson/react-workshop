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
import { PrivateRoute } from './PrivateRoute';
import Login, { fakeAuth } from './Login';
import { Nav } from './Nav';
import { About } from './About';
import { Users } from './Users';
import { User } from './User';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' />
        <Route path='/about' component={About} />
        <Route exact path='/users' component={Users} />
        <Route path='/users/:id' component={User} />
      </Switch>
    </div>
  );
  /*return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items' component={Items} />
        <Route path='/category' component={Category} />
        <Route path='/login' component={Login} />
        <PrivateRoute
          path='/admin'
          component={Admin}
          isAuthenticated={fakeAuth.isAuthenticated}
        />
      </Switch>
    </div>
  );
};

export const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>React Routing Example</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/items'>Items</Link>
      </li>
      <li>
        <Link to='/category'>Category</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  </header>
);

export const Home = () => (
  <div>
    <h1> Home Component</h1>
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  </div>
);

export const Items = () => (
  <div>
    <h1>Items Component</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </div>
);

export const Category = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Category Component</h1>
      <h5>Click on a category</h5>
      <ul>
        <li>
          <Link to={`${props.match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/food`}>Food</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/dresses`}>Dresses</Link>
        </li>
      </ul>
      <Route
        path={`${props.match.path}/:name`}
        render={(props) => <div>{props.match.params.name} category</div>}
      />
    </div>
  );
};

export const Admin = () => (
  <div>
    <h1>Protected Admin Component</h1>
    <p>You now access to this component because you are logged in.</p>
  </div>
); */
};

export default App;
