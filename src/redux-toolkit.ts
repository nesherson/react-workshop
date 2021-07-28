import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';

import { Todo } from './type';

const todosInitialState: Todo[] = [
    {
      id: uuid(),
      description: "Learn React",
      isComplete: true,
    },
    {
      id: uuid(),
      description: "Learn Redux",
      isComplete: true,
    },
    {
      id: uuid(),
      description: "Learn Redux-ToolKit",
      isComplete: false,
    },
  ];


const todosSlice = createSlice({
    name: 'todos',
    initialState: todosInitialState,
    reducers: {}

});