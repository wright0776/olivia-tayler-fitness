import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css';

import Header from './static/Header/Header';
import Footer from './static/Footer/Footer';

import Main from './features/Main/Main';
import AboutMe from './features/AboutMe/AboutMe';
import ClassSchedule from './features/ClassSchedule/ClassSchedule';
import BirthdayParties from './features/BirthdayParties/BirthdayParties';
import MyEvents from './features/MyEvents/MyEvents';
import Friday from './features/Friday/Friday';
import Contact from './features/Contact/Contact';
import Login from './admin/Login/Login';

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/class-schedule' component={ClassSchedule} />
                <Route path='/birthday-parties' component={BirthdayParties} />
                <Route path='/my-events' component={MyEvents} />
                <Route path='/friday' component={Friday} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;