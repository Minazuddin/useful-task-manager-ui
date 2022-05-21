import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    inProgress: [],
    completed: [],
}

const createToDoHandler = (state, action) => {
    const newState = {
        ...state,
        todos: [...state.todos, action.payload.todo]
    }
    console.log({
        action, 
        newState
    })
    return newState;
}

const deleteToDoHandler = (state, action) => {
    console.log('state', state)
    const newState = {
        ...state,
        todos: state.todos.filter(item => item.id != action.payload.todoId)
    }
    console.log({
        action, 
        newState
    })
    return newState;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TO_DO: return createToDoHandler(state, action)
        case actionTypes.DELETE_TO_TO: return deleteToDoHandler(state, action);
        default: return state;
    }
}
