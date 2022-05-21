import React, { useState, useEffect } from 'react';

const InProgress = () => {
    return (
        <>
            <div className='in-progress'>
                <div className='in-progress-header'>
                    <h3>IN PROGRESS</h3>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='in-progress-item'>
                        <div>
                            <input type='checkbox' className='in-progress-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='in-progress-timer in-progress-item'>
                        <span>00:00</span>
                    </div>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='in-progress-item'>
                        <div>
                            <input type='checkbox' className='in-progress-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='in-progress-timer in-progress-item'>
                        <span>00:00</span>
                    </div>
                </div>
                <div className='flex justify-content-space-between cursor-pointer'>
                    <div className='in-progress-item'>
                        <div>
                            <input type='checkbox' className='in-progress-checkbox' />
                        </div>
                        <p>1.Lorem ipsum is a dummy text content.</p>
                    </div>
                    <div className='in-progress-timer in-progress-item'>
                        <span>00:00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InProgress;