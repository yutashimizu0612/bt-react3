import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from '../pages/Register';
import Login from '../pages/Login';

function App() {
  return (
    <div className="content">
      <Router>
        <Route exact path="/" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
