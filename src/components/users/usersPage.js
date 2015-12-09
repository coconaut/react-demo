"use strict";

var React = require('react');
var UserCard = require('./userCard');
var UserStore = require('../../stores/userStore');
var HeaderActions = require('../../actions/headerActions');
var Fab = require('../common/fab');

const PAGE_TITLE = "Manage Users";

var UsersPage = React.createClass({
    getInitialState: function () {
        return {
            // this should pull from store, not the API directly...
            // ultimately, store should be set from search results, not just initialized data
            users: UserStore.getAllUsers()
        };
    },
    openAddUser: function() {
      console.log('fab clicked');
    },
    _onStoreChange: function () {
        // handler for UserStore changes
        this.setState({users: UserStore.getAllUsers()});
    },
    componentWillMount: function () {
        HeaderActions.updatePageTitle(PAGE_TITLE);
        // register with user store
        UserStore.addChangeListener(this._onStoreChange);
    },
    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onStoreChange);
    },
    createUserCell: function (user) {
        return (
            <div className="mdl-cell mdl-cell--4-col" key={user.id}>
                <UserCard user={user} />
            </div>
        )
    },
    render: function () {
        return (
            <div>
                <div className="mdl-grid">
                    {this.state.users.map(this.createUserCell, this)}
                </div>
                <Fab onClick={this.openAddUser}
                    icon='add' />
            </div>
        );
    }
});




module.exports = UsersPage;
