import React from 'react';
import { Link } from 'react-router-dom';
import './main-about.css';

function MainAbout() {
    return (
        <div className='main-about'>
            <div className='eyebrow'>About Olivia Tayler Fitness</div>
            <h2 className='heading'>Created by personal trainer Olivia Tayler &mdash;an individual passionate about helping you acheive your health and fitness goals.</h2>
            <div className='ma-items'>
                <div className='ma-item'>
                    <figure>5</figure>
                    <p>5 years experience working out and learning to be fit.</p>
                </div>
                <div className='ma-item'>
                    <figure>15</figure>
                    <p>15 workouts available to change your life.</p>
                </div>
                <div className='ma-item'>
                    <figure>33</figure>
                    <p>I will teach you about the number 33.</p>
                </div>
            </div>
            <Link className='info-link' to='/about'>Learn More About The Number 33</Link>
        </div>
    )
}

export default MainAbout
