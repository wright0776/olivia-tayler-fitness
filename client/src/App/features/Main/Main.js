import React from 'react';
import Masthead from './Masthead';
import MainLinks from './MainLinks';
import InfoSection from './InfoSection';
import MainAbout from './MainAbout/MainAbout';
// import Testimonials from './Testimonials/';
import TestCarousel from './TestCarousel/';
import Ready from './Ready/';
import './main.css';

function Main() {
    return (
        <div className='main'>
           <Masthead />
           <MainLinks />
           <InfoSection />
           <MainAbout />
           {/* <Testimonials /> */}
           <TestCarousel />
           <Ready />
        </div>
    )
}

export default Main