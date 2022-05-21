import React from "react";

const ComplexityHigh = ({ inlineStyle={} }) => {
    return (
        <>
            <abbr title='priority - high'>
                <div id='priority-high' className='priority-high unselectable' style={inlineStyle}>
                    <span>&uarr;</span>
                </div>
            </abbr>
        </>
    )
}

export default ComplexityHigh;