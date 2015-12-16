"use strict";

var keyMirror = require('keymirror');

var actionTypes = keyMirror({
    INITIALIZE: null,
    UPDATE_PAGE_TITLE: null,
    UPDATE_USER: null,
    DELETE_USER: null,
    ADD_USER: null,
    SEARCH_USERS: null,
});

module.exports = actionTypes;
