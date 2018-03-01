import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './containers/App/App';
import NotFound from './containers/App/NotFound';

import './styles/general.scss';

render((
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
), document.getElementById('app'));
