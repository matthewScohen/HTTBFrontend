import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import BookRecs from "./components/BookRecs";
import Voting from "./components/Voting";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Voting" component={Voting} exact />
        <Route path="/BookRecs" component={BookRecs} exact />
        <Route path="/AdminPanel" component={AdminPanel} exact />
      </Switch>
    </div>
  );
}

export default App;
export { App };
