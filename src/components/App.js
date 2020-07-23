import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from '../pages/Register';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
