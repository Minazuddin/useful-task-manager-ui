import React from "react";

const ComplexityMedium = ({ inlineStyle={} }) => {
    return (
        <>
            <abbr title='priority - medium'>
                <div id='priority-medium' className='priority-medium unselectable' style={inlineStyle}>
                    <span>=</span>
                </div>
            </abbr>
        </>
    )
}

export default ComplexityMedium;