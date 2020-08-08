import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Landing';
import Pagenotfound from './NotFound';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Pagenotfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;