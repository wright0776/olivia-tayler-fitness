import React from 'react';
import { Link } from 'react-router-dom';

function MainAbout() {
    return (
        <div className='main-about'>
            <div className='eyebrow'>About Olivia Tayler Fitness</div>
            <h2 className='heading'>Created by personal trainer Olivia Tayler &mdash;an individual passionate about helping you acheive your health and fitness goals.</h2>
            <figure>5</figure>
            <p>5 years experience working out and learning to be fit.</p>
            <figure>15</figure>
            <p>15 workouts available to change your life.</p>
            <figure>33</figure>
            <p>I will teach you how to sell 33 Value Packs.</p>
            <figure>33?</figure>
            <p>Why 33? Because 33 is a good number.</p>
            <Link className='info-link' to='/about'>Learn More About The Number 33</Link>
        </div>
    )
}

export default MainAbout
