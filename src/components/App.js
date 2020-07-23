import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from '../pages/Register';
import Login from '../pages/Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
  );
}

export default App;
