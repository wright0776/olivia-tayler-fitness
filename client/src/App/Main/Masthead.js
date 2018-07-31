import React from 'react'

function Masthead() {
    return (
        <div className='masthead'>
            <div className='mastheadText'>
                <h1>Workout videos for everyone.</h1>
                <span>Only $10/month.</span>
                <span className='subtext'>Get your BIG BUM&trade; in shape!</span>
            </div>
            <img className='otfitPhoto' src={require("../../media/otfitmasthead.jpeg")} alt="girl doing yoga"/>
        </div>
    )
}

export default Masthead
