import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import Home from './Home'
// import Explore from './Explore'
// import Elections from './Elections'
// import Feed from './Feed'
// import Profile from './Profile'

class BaseNav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/explore" className="navbar-link">Explore</Link>
                    <Link to="/elections" className="navbar-link">Elections</Link>
                    <Link to="/feed" className="navbar-link">Your Feed</Link>
                    <Link to="/profile" className="navbar-link">Profile</Link>
                </nav>

            </div>
        );
    }
}

export default BaseNav;