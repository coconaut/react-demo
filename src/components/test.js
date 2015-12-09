"use strict";

var React = require('react');
var HeaderActions = require('../actions/headerActions');
var TextInput = require('./common/textInput');

const PAGE_TITLE = "Test Page";

var Test = React.createClass({
    componentWillMount: function() {
      HeaderActions.updatePageTitle(PAGE_TITLE);
    },
    render: function() {
        return (
            <div>
            This is a test page.
                <br />
            </div>
        );
    }
});


module.exports = Test;
