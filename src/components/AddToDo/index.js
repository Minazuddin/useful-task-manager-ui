import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../actions/todoActions'

const AddToDo = ({ hideAddTemplate }) => {
    const dispatch = useDispatch(); //input to reducer

    const [description, setDescription] = useState('');
    const [priority, setpriority] = useState('');
    const todosLength = useSelector(state => state.todo.todos.length);    

    const resetOpacity = () => {
        setOpacity('priority-low', 0.3)
        setOpacity('priority-medium', 0.3)
        setOpacity('priority-high', 0.3)
    }

    const setOpacity = (id, opacity) => {
        const elem = document.querySelector(`#${id}`)
        elem.style.opacity = opacity;
    }

    const handleMouseDown = (id, opacity) => {
        resetOpacity();
        setOpacity(id, opacity);
    }

    const writeTask = ({ name, value }) => {
        switch (name) {
            case 'description': {
                setDescription(value)
            }
            case 'priority': {
                setpriority(value)
            }
        }
    }

    const addTask = (e) => {
        e.preventDefault();
        if (!description) return alert('Describe Your Task In Few Words!')
        if (!priority) return alert('Select Task priority!')
        const task = {
            id: todosLength + 1,
            description,
            priority
        }
        dispatch(actions.createToDo(task))
        hideAddTemplate(e)
    }

    return (
        <>
            <div className='dialog-box'>
                <div className='flex flex-direction-column gap-10'>
                    <textarea placeholder='Write your task here...' onChange={e => writeTask({ name: 'description', value: e.target.value })}></textarea>
                    <div className='flex priority'>
                        <abbr title='priority - low'>
                            <div id='priority-low' className='priority-low unselectable'
                                onMouseDown={e => handleMouseDown('priority-low', 1)}
                                onClick={e => writeTask({ name: 'priority', value: 'low' })}
                            >
                                <span>&darr;</span>
                            </div>
                        </abbr>
                        <abbr title='priority - medium'>
                            <div id='priority-medium' className='priority-medium unselectable'
                                onMouseDown={e => handleMouseDown('priority-medium', 1)}
                                onClick={e => writeTask({ name: 'priority', value: 'medium' })}
                            >
                                <span>=</span>
                            </div>
                        </abbr>
                        <abbr title='priority - high'>
                            <div id='priority-high' className='priority-high unselectable'
                                onMouseDown={e => handleMouseDown('priority-high', 1)}
                                onClick={e => writeTask({ name: 'priority', value: 'high' })}
                            >
                                <span>&uarr;</span>
                            </div>
                        </abbr>
                    </div>
                    <div className='flex'>
                        <button onClick={e => hideAddTemplate(e)} className='btn-close'>x</button>
                        <button className='btn-add' onClick={e => addTask(e)}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToDo;