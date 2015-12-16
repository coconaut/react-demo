"use strict";

var React = require('react');
var UserCard = require('./userCard');
var UserStore = require('../../stores/userStore');
var UserModal = require('./userModal');
var HeaderActions = require('../../actions/headerActions');
var Fab = require('../common/fab');
var UserSearchPanel = require('./userSearch');


// do a search filter deal...
// spinner for loading
// maybe a default field (name), then advanced?
// add a date field to users...
// paging


// then we need an order-pad type example...

// login


const PAGE_TITLE = "Manage Users";


// TODO: may want to split out the grid from the page...
// have page = search, grid, fab, modal

var UsersPage = React.createClass({
    getInitialState: function () {
        return {
            // this should pull from store, not the API directly...
            // ultimately, store should be set from search results, not just initialized data
            modalIsOpen: false,
            users: UserStore.getAllUsers(),
        };
    },

    openModal: function () {
        console.log('fab clicked');
        this.setState({modalIsOpen: true});
    },

    closeModal: function () {
        this.setState({modalIsOpen: false});
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
            <UserCard user={user} key={user.id}/>
        );
    },

    render: function () {
        return (
            <div>
                <UserSearchPanel />
                <div className="mdl-grid">
                    {this.state.users.map(this.createUserCell, this)}
                </div>
                <UserModal
                    closeModal={this.closeModal}
                    modalIsOpen={this.state.modalIsOpen}
                    />
                <Fab onClick={this.openModal}
                     icon='add'
                     fabStyle='lowerR'
                    />
            </div>
        );
    }
});


module.exports = UsersPage;
