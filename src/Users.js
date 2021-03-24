import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

export const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    setUsers(data);
  };

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
