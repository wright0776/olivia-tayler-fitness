import React from 'react';
import MainLinks from './MainLinks';
import InfoSection from './InfoSection';
import MainAbout from './MainAbout';
import Testimonials from './Testimonials';

function Main() {
    return (
        <div className='main'>
            <div className='masthead'>
                <div className='mastheadText'>
                    <h1>Workout videos for everyone.</h1>
                    <span>Only $10/month.</span>
                    <span className='subtext'>Get your BIG BUM&trade; in shape!</span>
                </div>
            </div>
           <MainLinks />
           <InfoSection />
           <MainAbout />
           <Testimonials />
        </div>
    )
}

export default Main