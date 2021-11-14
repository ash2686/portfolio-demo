import React from 'react';
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import Services from './components/Services'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' for component={Home} />
          <Route path='/about' for component={About} /> 
          <Route path='/services' for component={Services}/> 
        </Switch>
      </Router>
      </div>
  );
};

export default App;