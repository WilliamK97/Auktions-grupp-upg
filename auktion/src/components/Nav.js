import React from 'react'
 
export default class Nav extends React.Component {
    render() {
        return (
            <div>
            <nav className="blue-grey darken-1">
                <div className="nav-wrapper container ">
                <a href="/" className="brand-logo orange-text">Auktion App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/NewAuction">New Auction</a></li>

                </ul>
                </div>
            </nav>
            </div>
        )
    }
}