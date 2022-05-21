import React, { useState, useEffect } from 'react';
import BreakDuration from './BreakDuration';
import ProductiveHours from './ProductiveHours';
import AddToDo from '../AddToDo';
import { useSelector } from 'react-redux';

const Header = ({ setOverlay }) => {
    const [displayAddToDo, setDisplayAddToDo] = useState(false);

    const showAddTemplate = (e) => {
        e.preventDefault();
        setDisplayAddToDo(true);
        setOverlay(true);
    }

    const hideAddTemplate = (e) => {
        e.preventDefault();
        setDisplayAddToDo(false);
        setOverlay(false);
    }

    return (
        <>
            {displayAddToDo && <AddToDo hideAddTemplate={hideAddTemplate} />}
            <div>
                <h2 className='text-align-center'>TASK MANAGEMENT SYSTEM</h2>
            </div>
            <div className='timer'>
                <div className='flex flex-direction-column align-items-center'>
                    <h2>Productive Hours</h2>
                    <ProductiveHours />
                </div>
                <div className='add-task'>
                    <button onClick={e => showAddTemplate(e)}>+ ADD TASK</button>
                </div>
                <div className='flex flex-direction-column align-items-center'>
                    <h2>Break Duration</h2>
                    <BreakDuration />
                </div>
            </div>
        </>
    )
}

export default Header;