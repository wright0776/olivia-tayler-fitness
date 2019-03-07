import React from 'react';
import { Link } from 'react-router-dom';
import './mainAbout.css';

function MainAbout() {
    return (
        <div className='whySection'>

            <h2 className='heading'>Why Should kids do yoga?</h2>

            <p className='whyCause'>
                Children derive enormous benefits from yoga. Physically, it enhances their flexibility, strength, coordination, and body awareness. In addition, their concentration and sense of calmness and relaxation improves. Doing yoga, children exercise, play, connect more deeply with the inner self, and develop an intimate relationship with the natural world that surrounds them. Yoga brings that marvelous inner light that all children have to the surface.
            </p>

            <a href="https://www.yogajournal.com/teach/yoga-for-kids" className='sourceLink'>- yogajournal.com -</a>
        </div>
    )
}

export default MainAbout
