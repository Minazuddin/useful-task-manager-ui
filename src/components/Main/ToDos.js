import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/todoActions';
import PriorityHigh from '../SharedComponents/PriorityHigh';
import PriorityLow from '../SharedComponents/PriorityLow';
import PriorityMedium from '../SharedComponents/PriorityMedium';

const ToDos = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos);

    console.log(todos[0])

    const deleteToDo = (todoId) => {
        dispatch(actions.deleteToDo(todoId))
    }

    const getComplexityComponent = (level) => {
        switch (level) {
            case 'low': return <PriorityLow inlineStyle={{opacity: 1}} />
            case 'medium': return <PriorityMedium inlineStyle={{opacity: 1}} />
            case 'high': return <PriorityHigh inlineStyle={{opacity: 1}} />
        }
    }
    
    return (
        <>
            <div className='todos'>
                <div className='todos-header'>
                    <h3>TO DOS</h3>
                </div>
                {
                    todos.length > 0
                        ?
                        todos.map((todo, index) => (
                            <div className='flex justify-content-space-between'>
                                <div className='todo-item' style={{ flexBasis: '80%', display: 'flex', flexDirection: 'row' }}>
                                    <div>
                                        <input type='checkbox' className='todo-checkbox' />
                                        <span class="checkmark"></span>
                                    </div>
                                    <p>{index + 1}. {todo.description}</p>
                                    <div style={{ marginLeft: 50 }}>
                                        {getComplexityComponent(todo.priority)}
                                    </div>
                                </div>
                                <div onClick={e => deleteToDo(todo.id)} className='in-progress-timer in-progress-item' style={{ borderRadius: 0, cursor: 'pointer' }}>
                                    <span>
                                        <FaTrash size={30} color={'red'} />
                                    </span>
                                </div>
                            </div>
                        ))
                        :
                        null
                }
            </div>
        </>
    )
}

export default ToDos;