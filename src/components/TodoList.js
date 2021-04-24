import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { selectTodos } from '../redux/todoSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice.js';

const TodoList = () => {
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	console.log('TodoList/todos --> ', todos);
	useEffect(() => {dispatch(getTodosAsync())}, [dispatch]);
	
	return (

		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
