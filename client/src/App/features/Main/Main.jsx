import React from 'react';
import Masthead from './Masthead/Masthead';
import MainLinks from './MainLinks/MainLinks';
import InfoSection from './InfoSection/InfoSection';
import MainAbout from './MainAbout/MainAbout';
import Ready from './Ready/Ready';
import './main.css';

function Main() {
    return (
        <div className='main'>
           <Masthead />
           <MainLinks />
           <InfoSection />
           <MainAbout />
           <Ready />
        </div>
    )
}

export default Main;