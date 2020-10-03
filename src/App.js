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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Volenteers />
      </Router>
    </>
  );
}

export default App;
