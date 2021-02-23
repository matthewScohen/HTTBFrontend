import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/calendar" component={Calendar} exact/>
      </Switch>
    </div>
  );
}

export default App;
export { App };
