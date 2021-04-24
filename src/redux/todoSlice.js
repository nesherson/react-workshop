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
                    id: `${(new Date()).toString()}${Math.random() * 1000}`,
                    title: action.payload.title,
                    completed: false }
                state.push(todo);
        },
            removeTodo: (state, action) => {
                return state.filter(todo => todo.id !== action.payload.id);
            },
            toggleComplete: (state, action) => {
                const index = state.findIndex(todo => todo.id === action.payload.id);
                state[index].completed = action.payload.completed;
               
            }
        }
    });

    export default todosSlice.reducer;
    export const { addTodo, removeTodo, toggleComplete} = todosSlice.actions;