import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, removeTodo, selectTodos } from '../redux/todoSlice.js';
import { toggleCompleteAsync, removeTodoAsync } from '../redux/todoSlice.js';


const TodoItem = ({ id, title, completed }) => {


	const dispatch = useDispatch();

	const handleOnChange = () => {
		dispatch(toggleCompleteAsync({ id: id, completed: !completed}));
	}

	const handleOnClick = () => {
		dispatch(removeTodoAsync({id: id}));
	}

	return (
		
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleOnChange}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleOnClick}>Delete</button>
			</div>
		</li>
	
	);
};

export default TodoItem;
