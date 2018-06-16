import React from 'react';
import { Link } from 'react-router-dom';

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
            <ul>
                <li>
                    <Link to='/workouts'>
                        <div className='mainLink' >
                            <h2>Workouts</h2>
                            <span>Check out the latest workouts.</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='mainLink' to='/health-advice'>Workouts</Link>
                </li>
                <li>
                    <Link className='mainLink' to='/recipes'>Workouts</Link>
                </li>
            </ul>
        </div>
    )
}

export default Main