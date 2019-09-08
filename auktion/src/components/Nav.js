import React from 'react'
import { NavLink } from 'react-router-dom';
 
export default class Nav extends React.Component {
    render() {
        return (
            <div>
            <nav className="blue-grey darken-1">
                <div className="nav-wrapper container ">
                <a className="brand-logo orange-text">Auktion App</a>
                 
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new">New Auktion</NavLink></li>
                    {/* <li><a href="/">Log In</a></li> */}
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}