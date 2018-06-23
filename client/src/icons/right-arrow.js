import React from 'react'

function RightArrow(props) {
    console.log(props.forwardSlide)
    return (
        <svg onClick={props.forwardSlide} className='right-arrow-container' viewBox="0 0 68 53" preserveAspectRatio="xMidYMid meet">
            <g id="Page-1" stroke="none" strokeWidth="1" strokeLinecap="square">
                <g className='right-arrow' id="Group-2" strokeWidth="3">
                    <path d="M4.5,26.5 L62.50862,26.5" id="Line"></path>
                    <path d="M41.4072238,4.4072238 L63.5226203,26.5226203" id="Line-2"></path>
                    <path d="M41.4072238,26.4072238 L63.5226203,48.5226203" id="Line-2" transform="translate(52.500000, 37.500000) scale(1, -1) translate(-52.500000, -37.500000) "></path>
                </g>
            </g>
        </svg>
    )
}

export default RightArrow;