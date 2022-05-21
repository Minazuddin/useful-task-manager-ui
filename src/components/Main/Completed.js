import React, { useState, useEffect } from 'react';

const Completed = () => {
    return (
        <>
            <div className='completed'>
                <div className='completed-header'>
                    <h3>COMPLETED</h3>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='completed-item'>
                        <div>
                            <input type='checkbox' className='completed-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='completed-timer completed-item'>
                        <span>00:00</span>
                    </div>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='completed-item'>
                        <div>
                            <input type='checkbox' className='completed-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='completed-timer completed-item'>
                        <span>00:00</span>
                    </div>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='completed-item'>
                        <div>
                            <input type='checkbox' className='completed-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='completed-timer completed-item'>
                        <span>00:00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Completed;