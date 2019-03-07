import React from 'react';
import {Link} from 'react-router-dom';
import './ready.css';

function Ready() {
    return (
        <div className='ready'>
            <p>Ready to try a free class?</p>
            <Link to='/class-schedule'>get started today</Link>
        </div>
    )
}

export default Ready;
