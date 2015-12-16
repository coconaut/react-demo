"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';
var _pageTitle = "Main"; // default page title

var HeaderStore = assign({}, EventEmitter.prototype, {

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

    getTitle: function() {
        return _pageTitle;
    }
});

Dispatcher.register(function(action) {
   switch(action.actionType){
       case ActionTypes.INITIALIZE:
           _pageTitle = action.initialData.pageTitle;
           HeaderStore.emitChange();
           break;
       case ActionTypes.UPDATE_PAGE_TITLE:
           _pageTitle = action.pageTitle;
           HeaderStore.emitChange();
           break;
       default:
           // no op
   }
});

module.exports = HeaderStore;
