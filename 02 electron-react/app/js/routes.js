import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App';
import HomePage from './containers/HomePage';

module.exports = (
    <Route path="/" component={App}>
     <IndexRoute component={HomePage} />
    </Route>
)
