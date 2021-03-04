import './App.css';
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const login = (
      <form action='#' onSubmit={this.authorize}>
        <input type='password' placeholder='Password' />
        <input type='Submit' />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    return (
      <div id='authorization'>
        {this.state.authorized ? (
          <div>
            <h1>Contact</h1>
            {contactInfo}
          </div>
        ) : (
          <div>
            <h1>Enter your password</h1>
            {login}
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return <Contact />;
}

export default App;
