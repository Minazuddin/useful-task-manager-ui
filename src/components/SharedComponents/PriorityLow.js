import React from "react";

const ComplexityLow = ({ inlineStyle = {} }) => {
    return (
        <>
            <abbr title='priority - low' style={{ position: 'relative' }}>
                <div id='priority-low' className='priority-low unselectable' style={inlineStyle}>
                    <span>&darr;</span>
                </div>
            </abbr>
        </>
    )
}

export default ComplexityLow;