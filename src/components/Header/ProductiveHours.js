import React, { useState, useEffect } from "react";

const ProductiveHours = () => {
    const [showDropDownList, setShowDropDownList] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    const showList = () => setShowDropDownList(!showDropDownList)

    const hideList = () => setShowDropDownList(false)

    document.onclick = () => {
        if (!btnClicked) hideList();
    }

    return (
        <>
            <div className='hours-container'>
                <div>
                    <input disabled className='hours-input' type='text' defaultValue='00' />
                    <input disabled className='hours-input' type='text' defaultValue='00' />
                    <button className='dropdown' onClick={e => showList()} onMouseDown={e => setBtnClicked(true)} onMouseUp={e => setTimeout(() => setBtnClicked(false), 500)}>
                        <span className='dropdown-v-pointer'></span>
                    </button>
                </div>
                {
                    showDropDownList
                    &&
                    <div className='action-list'>
                        <ul onMouseLeave={e => hideList()}>
                            <li>Login</li>
                            <li>Take a break</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default ProductiveHours;