import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

  
export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const response = await fetch('http://localhost:7000/todos');
        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
);

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
        const response = await fetch('http://localhost:7000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: payload.title })
        });
        if (response.ok) {
            const todo = await response.json();
            console.log('async --> ', todo);
            return todo ;
        }
    }
);

export const removeTodoAsync = createAsyncThunk(
    'todos/removeAsyncThunk',
    async (payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: payload.id })
        });
        if (response.ok) {
            const todo = await response.json();
            console.log('remove/todo --> ', todo);
            return todo;
        }
    }
);

export const toggleCompleteAsync = createAsyncThunk(
    'todos/toggleCompleteAsync',
    async (payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: payload.id, completed: payload.completed })
        });
        if (response.ok) {
            
            const todo = await response.json();

          
            return  todo ;
        }
    }
);
    
const todosSlice = createSlice({
        name: 'todos',
        initialState: {
            todos: [
                { id: 1, title: 'deftodo1', completed: false },
                { id: 2, title: 'deftodo2', completed: false },
                { id: 3, title: 'deftodo3', completed: true },
                ],
            isLoading: false,
            hasError: false
        },
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: `${(new Date()).toString()}${Math.random() * 1000}`,
                    title: action.payload.title,
                    completed: false }
                state.todos.push(todo);
        },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            },
            toggleComplete: (state, action) => {
                const index = state.todos.findIndex(todo => todo.id === action.payload.id);
                state.todos[index].completed = action.payload.completed;   
            }
        },
        extraReducers: {
            [getTodosAsync.pending]: (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            },
            [getTodosAsync.fulfilled]: (state, action) => {
                state.todos = action.payload.todos;
                state.isLoading = false;
                state.hasError = false;
            },
            [getTodosAsync.rejected]: (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            },
            [addTodoAsync.pending]: (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            },
            [addTodoAsync.fulfilled]: (state, action) => {
                state.todos.push(action.payload);
                state.isLoading = false;
                state.hasError = false;
            },
            [addTodoAsync.rejected]: (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            },
            [toggleCompleteAsync.pending]: (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            },
            [toggleCompleteAsync.fulfilled]: (state, action) => {
                const index = state.todos.findIndex(todo => todo.id === action.payload.id);
                state.todos[index].completed = action.payload.completed;
                state.isLoading = false;
                state.hasError = false;
            },
            [toggleCompleteAsync.rejected]: (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            },
            [removeTodoAsync.fulfilled]: (state, action) => {

                state.todos = action.payload;
                state.isLoading = false;
                state.hasError = false;
            }
                
    
    }

    });

    export const selectIsLoading = (state) => state.todos.isLoading;

    export const selectTodos = (state) => state.todos.todos;

    export default todosSlice.reducer;
    export const { addTodo, removeTodo, toggleComplete} = todosSlice.actions;