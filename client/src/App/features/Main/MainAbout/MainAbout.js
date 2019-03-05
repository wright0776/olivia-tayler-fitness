import React from 'react';
import { Link } from 'react-router-dom';
import './main-about.css';

function MainAbout() {
    return (
        <div className='main-about'>
            <div className='eyebrow'>About Olivia</div>
            <h2 className='heading'>Olivia is an individual who is passionate about working with kids and teaching yoga.</h2>
            <div className='ma-items'>
                <div className='ma-item'>
                    <figure>7</figure>
                    <p>7 years experience working with kids.</p>
                </div>
                <div className='ma-item'>
                    <figure>1</figure>
                    <p>1 year of experience teaching yoga.</p>
                </div>
                <div className='ma-item'>
                    <figure>Unlimited</figure>
                    <p>Unlimited fun new yoga classes for your child.</p>
                </div>
            </div>
            <Link className='about-info-link' to='/about-me'>Learn More About Olivia</Link>
        </div>
    )
}

export default MainAbout
