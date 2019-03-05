import React from 'react';
import {Link} from 'react-router-dom';

function StandardNav() {
    return (
        <div className='standardNav'>
            <Link className='standardNavLink' to='/about-me'>About Me</Link>
            <Link className='standardNavLink' to='/class-schedule'>Class Schedule</Link>
            <Link className='standardNavLink' to='/services-offered'>Services Offered</Link>
            <Link className='standardNavLink' to='/contact'>Contact</Link>
        </div>
    )
}

export default StandardNav
