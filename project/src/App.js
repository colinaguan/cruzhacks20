import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Start from './components/Start'
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
  }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/:page_id' render={(props) => <BaseNav />} ></Route>
            <Route exact path='/' render={(props) => <GetStarted />}></Route>
            {/* <Route exact path='/home' render={(props) => <Home />}></Route>
            <Route exact path='/explore' render={(props) => <Explore />}></Route>
            <Route exact path='/elections' render={(props) => <Elections />}></Route>
            <Route exact path='/feed' render={(props) => <Feed />}></Route>
            <Route exact path='/profile' render={(props) => <Profile />}></Route> */}
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
