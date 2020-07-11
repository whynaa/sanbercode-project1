import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, MyHome, MyGold, MyContact, AboutMe, Footer} from './views'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <MyHome/>
        </Route>
        <Route path='/gold'>
          <MyGold/>
        </Route>
        <Route path='/contact'>
          <MyContact/>
        </Route>
        <Route path='/about'>
          <AboutMe/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
