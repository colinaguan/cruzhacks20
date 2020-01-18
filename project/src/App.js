import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GetStarted from './components/GetStarted'
import DashMain from './components/DashMain'
import ExpMain from './components/ExpMain'
import ElectMain from './components/ElectMain'
import CommMain from './components/CommMain'
import Profile from './components/Profile'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-link">Dashboard</Link>
            <Link to="/explore" className="navbar-link">Explore</Link>
            <Link to="/elections" className="navbar-link">Elections</Link>
            <Link to="/communities" className="navbar-link">Communities</Link>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <Link to="/getstarted" className="navbar-link">Get Started</Link>
          </nav>
          <div>
            <Switch>
              <Route exact path='/getstarted' render={(props) => <GetStarted />}></Route>
              <Route exact path='/' render={(props) => <DashMain />}></Route>
              <Route exact path='/explore' render={(props) => <ExpMain />}></Route>
              <Route exact path='/elections' render={(props) => <ElectMain />}></Route>
              <Route exact path='/communities' render={(props) => <CommMain />}></Route>
              <Route exact path='/profile' render={(props) => <Profile />}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
