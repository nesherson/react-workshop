import React from 'react';
import { selectTodos } from '../redux/todoSlice.js';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const completedItems = useSelector(selectTodos).filter(todo => todo.completed === true);

	return <h4 className='mt-3'>Total Complete Items: {completedItems.length}</h4>;
};

export default TotalCompleteItems;
