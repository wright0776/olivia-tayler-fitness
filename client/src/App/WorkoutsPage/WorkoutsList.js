import React from 'react';
import {Link} from 'react-router-dom';

function WorkoutsList() {
    return (
        <div>
            WorkoutsList - - -
            <Link to='/workouts/admin-add'>Admin Add Workout</Link>
        </div>
    )
}

export default WorkoutsList
