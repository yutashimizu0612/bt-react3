import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Users from '../pages/Users';

function App() {
  return (
    <div className="content">
      <Router>
        <Route exact path="/" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/users" component={Users}></Route>
      </Router>
    </div>
  );
}

export default App;
