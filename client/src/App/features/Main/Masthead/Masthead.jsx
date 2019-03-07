import React from 'react';
import './masthead.css';

function Masthead() {
    return (
        <div className='masthead'>
            <div className='mastheadText'>
                <h1>Yoga Teacher and Personal Trainer.</h1>
                <span>Now offering kids yoga!</span>
                <span className='subtext'>A fun-filled mindfulness and meditation practice for kids.</span>
                <span className='firstClass'>First Class Free!</span>
            </div>
            <img className='otfitPhoto' src={require("../../../../media/familyYoga1.jpg")} alt="girl doing yoga"/>
        </div>
    )
}

export default Masthead;
