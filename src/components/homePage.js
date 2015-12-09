"use strict";

var React = require('react');
var HeaderActions = require('../actions/headerActions');

const PAGE_TITLE = "Home";

var Home = React.createClass({
   componentWillMount: function() {
     HeaderActions.updatePageTitle(PAGE_TITLE);
   },
   render: function() {
       return (
         <div>
            This is the Home Page!
             <br />
             Check out users maybe?
         </div>
       );
   }
});

module.exports = Home;