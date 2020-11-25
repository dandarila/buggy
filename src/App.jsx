import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from './components/homepage/homepage.component';
import ReportIssue from './pages/report-issue/report-issue.component';
import Navbar from './components/navbar/Navbar.component';
import './App.scss';
import SignInAndSignUp from './components/sign-up-and-sign-in/sign-up-and-sign-in.component';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/report' component={ReportIssue}/>
          <Route path='/authentication' component={SignInAndSignUp}/>
        </Switch>
      </Router>
       
      
    </div>
  );
}


export default App;