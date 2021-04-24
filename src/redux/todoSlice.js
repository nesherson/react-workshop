import { createSlice } from '@reduxjs/toolkit';


const todosSlice = createSlice({
        name: 'todos',
        initialState: [
            { id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
        ],
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: new Date(),
                    title: action.payload.title,
                    completed: false }
                state.push(todo);
        },
            removeTodo: (state, action) => {
                return state.filter(todo => todo.id !== action.payload.id);
            },
            toggleComplete: (state, action) => {
                return state.map(todo => {
                    
                })
            }
        }
    });

    export default todosSlice.reducer;
    export const { addTodo, removeTodo} = todosSlice.actions;