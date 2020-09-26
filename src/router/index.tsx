import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import HomePage from '../components/pages/HomePage';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
