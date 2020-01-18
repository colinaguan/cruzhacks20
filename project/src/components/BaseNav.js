import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../stylesheets/BaseNav.css'

// import Home from './Home'
// import Explore from './Explore'
// import Elections from './Elections'
// import Feed from './Feed'
// import Profile from './Profile'

class BaseNav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar-top navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <ul class="navbar-nav px-3">
                        <li class="nav-item text-nowrap">
                            <a class="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className="row row-main">
                        <nav className="col-2  bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="/home" className="navbar-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/explore" className="navbar-link">Explore</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/elections" className="navbar-link">Elections</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/feed" className="navbar-link">Your Feed</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="navbar-link">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-10 ml-sm-auto">
                            <div class="head-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 class="h2">Dashboard</h1>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaseNav;