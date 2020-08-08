import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Landing';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;