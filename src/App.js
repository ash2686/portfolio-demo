import React from 'react';
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Switch>
          <Route path='/' for component={Home} />
          <Route path='/about' for component={About} />  
        </Switch>
      </Router>
      </div>
  );
};

export default App;