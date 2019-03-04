import React from 'react';
import {Link} from 'react-router-dom';

function StandardNav() {
    return (
        <div className='standardNav'>
            <Link className='standardNavLink' to='/about-me'>About Me</Link>
            <Link className='standardNavLink' to='/class-schedule'>Class Schedule</Link>
            <Link className='standardNavLink' to='/birthday-parties'>Birthday Parties</Link>
            <Link className='standardNavLink' to='/my-events'>My Events</Link>
            <Link className='standardNavLink' to='/friday'>Friday Night Yoga</Link>
            <Link className='standardNavLink' to='/contact'>Contact</Link>
        </div>
    )
}

export default StandardNav
