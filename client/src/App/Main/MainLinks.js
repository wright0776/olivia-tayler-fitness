import React from 'react'
import { Link } from 'react-router-dom';

function MainLinks() {
    return (
        <ul className='main-links'>
            <li>
                <Link to='/workouts'>
                    <div className='main-link' >
                        <h2>Workouts</h2>
                        <p>
                            Check out the latest workouts.
                                <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/health-advice'>
                    <div className='main-link'>
                        <h2>Health Advice</h2>
                        <p>
                            The philosophy behind Olivia Tayler Fitness.
                                <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/recipes'>
                    <div className='main-link'>
                        <h2>Recipes</h2>
                        <p>
                            Recipes to fuel your success.
                                <span className='right-arrow'>&rarr;</span>
                        </p>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default MainLinks
