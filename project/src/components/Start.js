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

class Start extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to={"/getstarted"}>
                    <button type="button" className="btn btn-light">Get Started</button>
                </Link>
                <Link to={"/home"}>
                    <button type="button" className="btn btn-light" onClick={this.props.handleFinishStart}>Home</button>
                </Link>
            </div>
        );
    }
}

export default Start;