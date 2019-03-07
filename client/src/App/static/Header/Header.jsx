import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import StandardNav from './StandardNav';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            mobileNav: false
        }
        this.state = this.initialState;
    }

    toggleNav = () => {
        this.setState(prevState => ({ mobileNav: !prevState.mobileNav }));
    }

    render() {
        return (
            <div className='header'>
                <h1 className='brand'>
                    <Link to="/">Olivia Tayler Fitness</Link>
                </h1>
                <button onClick={this.toggleNav} className='burger'>☰</button>
                <MobileNav toggleNav={this.toggleNav} mobileNav={this.state.mobileNav} />
                <StandardNav />
                <div className='loginContainer'>
                    <Link className='login' to='/login'>Login</Link>
                </div>
            </div>
        )
    }
}

export default Header;