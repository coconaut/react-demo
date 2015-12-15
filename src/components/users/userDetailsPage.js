"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var HeaderActions = require('../../actions/headerActions');
var UserDetailsEditor = require('./userDetailsEditor');


const PAGE_TITLE = "Edit User";


var UserDetailsPage = React.createClass({
    mixins: [
      History
    ],
    componentWillMount: function () {
        HeaderActions.updatePageTitle(PAGE_TITLE);
    },
    onSaveComplete: function() {
        this.history.pushState(null, 'users');
    },
    render: function () {
        return (
            <div>
                <UserDetailsEditor
                    userId={this.props.params.id}
                    onSaveComplete={this.onSaveComplete}
                />
            </div>
        );
    }
});

module.exports = UserDetailsPage;
