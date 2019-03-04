import React from 'react'
import { Link } from 'react-router-dom';

function MainLinks() {
    return (
        <ul className='main-links'>
            <li>
                <Link to='/workouts'>
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
                <Link to='/health-advice'>
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
                <Link to='/recipes'>
                    <div className='main-link'>
                        <h2>My Events</h2>
                        <p>
                            Check out special events I am teaching at
                            <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default MainLinks
