// this is the entry-point into our app

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');


// require material so browserify picks it up
// note: this is causing that error...
var material = require('../node_modules/material-design-lite/material.min.js');

// use browser history to avoid hashes in URLs -> will require some server work...
var createBrowserHistory = require('history/lib/createHashHistory');
//var createBrowserHistory = require('history/lib/createBrowserHistory');
const history = createBrowserHistory();

// Initialize
InitializeActions.initApp();


// will run app.js and any child components based on route
ReactDOM.render(
    <Router history = {history} routes = {routes}></Router>,
    document.getElementById('main-app')
);
