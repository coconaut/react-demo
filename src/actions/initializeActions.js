"use strict";


var Dispatcher = require('../dispatcher/appDispatcher');
var ActionsTypes = require('../constants/actionTypes');
var UserApi = require('../api/userApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionsTypes.INITIALIZE,
            initialData: {
                users: UserApi.getAllUsers(),
                pageTitle: "Home"
            }
        });
    }
};

module.exports = InitializeActions;