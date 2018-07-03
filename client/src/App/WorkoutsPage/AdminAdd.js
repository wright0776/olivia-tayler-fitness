import React from 'react'
import {Link} from 'react-router-dom';

function AdminAdd() {
    return (
        <div className='admin-add'>
            AdminAdd - - -
            <Link to='/workouts/'>back to workouts</Link>
            <label>
                Image Url
                <input type="url"/>
            </label>
        </div>
    )
}

export default AdminAdd
