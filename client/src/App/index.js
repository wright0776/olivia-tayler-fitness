import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Main from './Main';
import Workouts from './Workouts';
import HealthAdvice from './HealthAdvice';
import Recipes from './Recipes';
import About from './About';

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/workouts' component={Workouts} />
                <Route path='/health-advice' component={HealthAdvice} />
                <Route path='/recipes' component={Recipes} />
                <Route path='/about' component={About} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;