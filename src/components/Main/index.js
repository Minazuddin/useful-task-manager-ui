import React, { useState, useEffect } from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import ToDos from './ToDos';

const Main = () => {
    return (
        <>
            <div className='task-conatiner flex alig-items-center justify-content-center'>
                <ToDos />
                <InProgress />
                <Completed />
            </div>
        </>
    )
}

export default Main;