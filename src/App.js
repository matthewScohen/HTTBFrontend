import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';
import BookRecs from './components/BookRecs';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} exact/>
          <Route path="/Calendar" component={Calendar} exact/>
          <Route path="/BookRecs" component={BookRecs} exact/>
      </Switch>
    </div>
  );
}

export default App;
export { App };