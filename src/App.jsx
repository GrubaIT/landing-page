import React from 'react';
import About from './Components/Pages/About';
import Blog from './Components/Pages//Blog';
import Collaboration from './Components/Pages//Collaboration';
import Contact from './Components/Pages//Contact';
import Events from './Components/Pages//Events';
import Home from './Components/Pages//Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect from='/home' to='/' />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/collaboration' component={Collaboration} />
        <Route path='/contact' component={Contact} />
        <Route path='/events' component={Events} />
      </Switch>
    </Router>
  );
}
