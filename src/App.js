import './App.css';
import React, { useState, useEffect } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const areDatesEqual = (date1_value, date2_value) => {
    return new Date(date1_value).getSeconds() ===
      new Date(date2_value).getSeconds()
      ? true
      : false;
  };

  useEffect(() => {
    if (thoughts) {
      const intervalId = setInterval(() => {
        setThoughts((prev) =>
          prev.filter((t) => !areDatesEqual(t.expiresAt, Date.now()))
        );
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

  const onChange = ({ target }) => {
    setNewThought(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setThoughts((prev) => {
      return [
        ...prev,
        {
          id: generateId(),
          text: newThought,
          expiresAt: getNewExpirationTime(),
        },
      ];
    });
    setNewThought('');
  };

  const handleRemoveThought = (id) => {
    setThoughts((prev) => prev.filter((t) => t.id !== id));
    console.log('handle');
  };

  return (
    <div className='App'>
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm
          onChange={onChange}
          value={newThought}
          onSubmit={onSubmit}
        />
        <ul className='thoughts'>
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={handleRemoveThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
