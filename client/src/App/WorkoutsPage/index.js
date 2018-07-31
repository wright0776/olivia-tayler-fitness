import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './workouts.css';
import WorkoutsList from './WorkoutsList';
import AdminAdd from './AdminAdd';

function Workouts() {
    return (
        <div>
            <h2 className='title'>Workouts</h2>
            {/* <Switch>
                <Route exact path='/workouts/' component={WorkoutsList} />
                <Route path='/workouts/admin-add' component={AdminAdd} />
            </Switch> */}
            <h2 className='comingSoon'>COMING SOON!</h2>
        </div>
    )
}

export default Workouts
