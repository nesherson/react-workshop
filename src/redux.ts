import { v1 as uuid } from 'uuid'

import { Todo } from './type'

const CREATE_TODO = 'CREATE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const SELECT_TODO = 'SELECT_TODO'

interface CreateTodoActionType {
    type: typeof CREATE_TODO
    payload: Todo
}

export const createTodoActionCreator = ({description}: {
    description: string
}): CreateTodoActionType => {
    return {
        type: CREATE_TODO,
        payload: {
            id: uuid(),
            description,
            isComplete: false
        }
    }
}

interface EditTodoActionType {
    type: typeof EDIT_TODO
    payload: { id: string, description: string}
}

export const editTodoActionCreator = ({id, description}: { id: string, description: string}): EditTodoActionType => {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            description
        }
    }
}

interface ToggleTodoActionType {
    type: typeof TOGGLE_TODO,
    payload: { id: string, isComplete: boolean}
}

export const toggleTodoActionCreator = ({id, isComplete}: {id: string, isComplete: boolean}): ToggleTodoActionType => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id,
            isComplete
        }
    }
}

interface DeleteTodoActionType {
    type: typeof DELETE_TODO,
    payload: {id: string}
}

export const deleteTodoActionCreator = ({id}: {id: string}): DeleteTodoActionType => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

interface SelectTodoActionType {
    type: typeof SELECT_TODO,
    payload: {id: string}
}

export const selectTodoActionCreator = ({id}: {id: string}): SelectTodoActionType => {
    return {
        type: SELECT_TODO,
        payload: {
            id
        }
    }
}