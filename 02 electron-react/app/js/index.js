import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from './routes.js'



ReactDom.render(
    <Router routes={routes} history={hashHistory}/>, 
    document.getElementById("root")
);
