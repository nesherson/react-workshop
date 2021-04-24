import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice.js';

export default configureStore({
    reducer: {
        todos: todosReducer,
    }}
);