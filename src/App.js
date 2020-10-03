import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Volenteers from './components/Volenteers/Volenteers';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Volenteers />
          </Route>
          <Route path="/registers">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
