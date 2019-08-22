import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/views/About";
import Cendekiawan from "./components/views/Cendekiawan";
import Home from "./components/views/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cendekiawan" component={Cendekiawan} />
        </Switch>
      </Router>
    );
  }
}

