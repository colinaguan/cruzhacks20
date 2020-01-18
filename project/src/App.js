import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GetStarted from './components/GetStarted'
import BaseNav from './components/BaseNav'
import Home from './components/Home'
import Explore from './components/Explore'
import Elections from './components/Elections'
import Feed from './components/Feed'
import Profile from './components/Profile'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFinishStart = this.handleFinishStart.bind(this);

    this.state = {
      get_started: true
    };
  }

  handleFinishStart() {
    this.setState({ get_started: false });
  }

  render() {

    let navBar;
    if (!this.state.get_started) {
      navBar = (<BaseNav />);
    }

    return (
      <div className="container">
        <Router>
          <div>
            {navBar}
            <Switch>
              <Route exact path='/getstarted' render={(props) => <GetStarted handleFinishStart={this.handleFinishStart} />}></Route>
              <Route exact path='/' render={(props) => <Home />}></Route>
              <Route exact path='/explore' render={(props) => <Explore />}></Route>
              <Route exact path='/elections' render={(props) => <Elections />}></Route>
              <Route exact path='/feed' render={(props) => <Feed />}></Route>
              <Route exact path='/profile' render={(props) => <Profile />}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
