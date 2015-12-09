"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

// just a magic string for on change
var CHANGE_EVENT = 'change';

// private data
var _users = [];

var UserStore = assign({}, EventEmitter.prototype, {

    // this will allow components to register to this store's changes
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    // allows components to remove listeners
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    // emits a change event for the store
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllUsers: function() {
        return _users;
    },

    getUserById: function(id) {
        return _.find(_users, {id: id});
    }
});

// handle dispatched actions
Dispatcher.register(function(action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _users = action.initialData.users;
            UserStore.emitChange();
            break;

        case ActionTypes.UPDATE_USER:
            var existingUser = _.find(_users, {id: action.user.id});
            var existingIndex =  _.indexOf(_users, existingUser);
            _users.splice(existingIndex, 1, action.user);
            UserStore.emitChange();
            break;

        case ActionTypes.DELETE_USER:
            _.remove(_users, function(user){
                return action.userId === user.id;
            });
            UserStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = UserStore;
