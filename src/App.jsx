import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from './components/homepage/homepage.component';
import ReportIssue from './pages/report-issue/report-issue.component';
import Navbar from './components/navbar/Navbar.component';
import './App.scss';
import Login from './components/login/Login';

const initialState = {
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }


render() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/report' component={ReportIssue}/>
          <Route path='/authentication' component={Login}/>
        </Switch>
      </Router>
       
      
    </div>
  );
}
}


export default App;