import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MobileNav extends Component {
    render() {
        let visibility = "mobileNavHide"
        if (this.props.mobileNav) visibility = "mobileNavShow"
        return (
            <div className={visibility}>
                <div onClick={this.props.toggleNav} className='mobileNavX'>&times;</div>
                <div className='mobileNavItems'>
                    <div className='blankItem'></div>
                    <div className='first'>
                        <Link onClick={this.props.toggleNav} to='/' className='mobileNavItem'>Home</Link>
                        <Link onClick={this.props.toggleNav} to='/about-me' className='mobileNavItem'>About Me</Link>
                        <Link onClick={this.props.toggleNav} to='/class-schedule' className='mobileNavItem'>Class Schedule</Link>
                        <Link onClick={this.props.toggleNav} to='/services-offered' className='mobileNavItem'>Services Offered</Link>
                        <Link onClick={this.props.toggleNav} to='/contact' className='mobileNavItem'>Contact</Link>
                        <Link onClick={this.props.toggleNav} to='/login' className='mobileNavItem login'>Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav
