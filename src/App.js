import React from 'react';
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import Services from './components/Services'
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact'
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
          <Route path='/pricing' for component={Pricing}/>
          <Route path='/blog' for component={Blog}/>
          <Route path='/contact' for component={Contact}/>
        </Switch>
      </Router>
      </div>
  );
};

export default App;