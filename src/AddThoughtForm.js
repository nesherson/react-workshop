import React from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm({ value, onChange, onSubmit }) {
  return (
    <form className='AddThoughtForm' onSubmit={onSubmit}>
      <input
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={value}
        onChange={onChange}
      />
      <input type='submit' value='Add' />
    </form>
  );
}
