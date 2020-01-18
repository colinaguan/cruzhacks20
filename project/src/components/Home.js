import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Explore from './Explore'
import Elections from './Elections'
import Feed from './Feed'
import Profile from './Profile'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

export default Home;