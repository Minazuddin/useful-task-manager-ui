import React, { useState, useEffect } from "react";

const BreakDuration = () => {
    return (
        <>
            <div className='hours-container'>
                <div>
                    <input disabled className='hours-input' type='text' defaultValue='00' />
                    <input disabled className='hours-input' type='text' defaultValue='00' />
                </div>
            </div>
        </>
    )
}

export default BreakDuration;