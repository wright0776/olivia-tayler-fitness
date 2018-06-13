import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Main from './Main';

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;