"use strict";

var React = require('react');
// react-router imports-> see change log for 0.13 to 1.0.0, a lot of diffs...
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

// top-level components to use
var App = require('./components/app');
var Home = require('./components/homePage');
var Test = require('./components/test');
var UsersPage = require('./components/users/usersPage');
var UserDetailsPage = require('./components/users/userDetailsPage');
var OrdersPage = require('./components/orders/ordersPage');

// routes should nest under app -> they'll be rendered in main.js
var routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="test" component={Test} />
        <Route path="users" component={UsersPage} />
        <Route path="users/:id" component={UserDetailsPage} />
        <Route path="orders" component={OrdersPage} />
    </Route>
);

module.exports = routes;

