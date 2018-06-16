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
                        <Link onClick={this.props.toggleNav} to='/workouts' className='mobileNavItem'>Workouts</Link>
                        <Link onClick={this.props.toggleNav} to='/health-advice' className='mobileNavItem'>Health Advice</Link>
                        <Link onClick={this.props.toggleNav} to='/recipes' className='mobileNavItem'>Recipes</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav
