"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var UserApi = require('../api/userApi');

var UserActions = {
    updateUser: function(user) {
        var updatedUser = UserApi.saveUser(user);

        Dispatcher.dispatch({
           actionType: ActionTypes.UPDATE_USER,
           user: updatedUser
        });
    },

    deleteUser: function(id) {
        UserApi.deleteUser(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_USER,
            userId: id
        });
    },

    saveUser: function(user) {
        var newUser = UserApi.saveUser(user);
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_USER,
            user: newUser
        });
    },

    searchUsers: function(searchFields) {
        var filteredUsers = UserApi.searchUsers(searchFields);
        Dispatcher.dispatch({
           actionType: ActionTypes.SEARCH_USERS,
            users: filteredUsers
        });
    }
};

module.exports = UserActions;
