import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

import '../stylesheets/BaseNav.css'

import Home from './Home'
import Explore from './Explore'
import Elections from './Elections'
import Feed from './Feed'
import Profile from './Profile'

class BaseNav extends Component {

    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);

        this.state = {
            page_id: "home"
        };
    }

    onPageChange(page) {
        this.setState({
            page_id: page.target.id
        });
        // console.log(page.target.id);
    }

    render() {

        let pageHeader = this.state.page_id.charAt(0).toUpperCase() + this.state.page_id.substring(1);

        let currentPage;
        switch (this.state.page_id) {
            case "home":
                currentPage = (<Home />);
                break;
            case "explore":
                currentPage = (<Explore />);
                break;
            case "elections":
                currentPage = (<Elections />);
                break;
            case "feed":
                currentPage = (<Feed />);
                break;
            case "profile":
                currentPage = (<Profile />);
                break;
        }

        return (
            <div>
                <nav className="navbar-top navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className="row row-main">
                        <nav className="col-2  bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="/home" id="home" className="navbar-link" onClick={this.onPageChange}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/explore" id="explore" className="navbar-link" onClick={this.onPageChange}>Explore</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/elections" id="elections" className="navbar-link" onClick={this.onPageChange}>Elections</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/feed" id="feed" className="navbar-link" onClick={this.onPageChange}>Your Feed</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" id="profile" className="navbar-link" onClick={this.onPageChange}>Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-10 ml-sm-auto">
                            <div className="head-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">{pageHeader}</h1>
                            </div>
                            {currentPage}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaseNav;