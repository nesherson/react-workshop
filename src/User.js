import React, { useState, useEffect } from 'react';

export const User = (props) => {
  const [user, setUser] = useState({
    address: {},
  });

  const fetchItem = async () => {
    const userId = props.match.params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();

    setUser(data);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h2>User details:</h2>
      <p>Name: {user.name}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};
