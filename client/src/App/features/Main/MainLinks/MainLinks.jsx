import React from 'react';
import { Link } from 'react-router-dom';
import './mainLinks.css';

function MainLinks() {
    return (
        <ul className='main-links'>
            <li>
                <Link to='/class-schedule'>
                    <div className='main-link' >
                        <h2>Class Schedule</h2>
                        <p>
                            See when my classes are
                            <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    <div className='main-link'>
                        <h2>Birthday Parties</h2>
                        <p>
                            Book me for a fun birthday experience
                                <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/services-offered'>
                    <div className='main-link'>
                        <h2>My Events</h2>
                        <p>
                            Check out my services offered
                            <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default MainLinks
