import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ForexPage from './containers/ForexPage';

module.exports = (
    <Route path="/" component={App}>
     <IndexRoute component={HomePage} />
     <Route path="/counter" component={CounterPage} />
     <Route path="/forex" component={ForexPage} />
    </Route>
)
