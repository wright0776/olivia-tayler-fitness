import React from 'react';
import {Link} from 'react-router-dom';

function StandardNav() {
    return (
        <div className='standardNav'>
            <Link className='standardNavLink' to='/workouts'>Workouts</Link>
            <Link className='standardNavLink' to='/health-advice'>Health Advice</Link>
            <Link className='standardNavLink' to='/recipes'>Recipes</Link>
        </div>
    )
}

export default StandardNav
