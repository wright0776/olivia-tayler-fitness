import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
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
                <div onClick={this.toggleNav} className='burger'>☰</div>
                <MobileNav toggleNav={this.toggleNav} mobileNav={this.state.mobileNav} />
            </div>
        )
    }
}

export default Header;