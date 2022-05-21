import * as actionTypes from './actionTypes';

export const createToDo = (todo) => {
    return {
        type: actionTypes.CREATE_TO_DO,
        payload: { todo }
    }
}

export const deleteToDo = (todoId) => {
    return {    
        type: actionTypes.DELETE_TO_TO,
        payload: { todoId }
    }
}