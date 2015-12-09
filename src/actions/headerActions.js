"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionsTypes = require('../constants/actionTypes');

var HeaderActions = {
    updatePageTitle: function(title) {
        Dispatcher.dispatch({
            actionType: ActionsTypes.UPDATE_PAGE_TITLE,
            pageTitle: title
        });
    }
};

module.exports = HeaderActions;
