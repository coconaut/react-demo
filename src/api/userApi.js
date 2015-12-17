"use strict";

//This file is mocking a web API by hitting hard coded data.
var users = require('./userData').users;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (user) {
    return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var UserApi = {
    getAllUsers: function () {
        return _clone(users);
    },

    getUserById: function (id) {
        var user = _.find(users, {id: id});
        return _clone(user);
    },

    saveUser: function (user) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the user to the DB via AJAX call...');

        if (user.id) {
            var existingUserIndex = _.indexOf(users, _.find(users, {id: user.id}));
            users.splice(existingUserIndex, 1, user);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new users in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            user.id = _generateId(user);
            user.dateCreated = JSON.parse(JSON.stringify(new Date()));
            users.push(user);
        }

        return _clone(user);
    },

    deleteUser: function (id) {
        console.log('Pretend this just deleted the user from the DB via an AJAX call...');
        _.remove(users, {id: id});
    },

    searchUsers: function (searchFields) {
        console.log('Pretend this hit the API with some search fields...');

        // make sure we had a search
        //if (!searchFields || !searchFields.nameOfUser || searchFields.nameOfUser == "") {
        //    return this.getAllUsers();
        //}

        // filter on name
        var filteredUsers = _.filter(users, function (u) {
            return (!searchFields.nameOfUser) ||
                searchFields.nameOfUser == "" ||
                _.startsWith(u.firstName, searchFields.nameOfUser) ||
                _.startsWith(u.lastName, searchFields.nameOfUser);
        });


        // filter on dateCreated
        var filteredByStartDate = _.filter(filteredUsers, function (u) {
            return (!searchFields.startDate) || (searchFields.startDate == "") ||
                Date.parse(searchFields.startDate) <= Date.parse(u.dateCreated);
        });

        var filteredByEndDate = _.filter(filteredByStartDate, function (u) {
            return (!searchFields.endDate) || (searchFields.endDate == "") ||
                Date.parse(searchFields.endDate) >= Date.parse(u.dateCreated);
        });



        // just cloning so we don't return by ref
        return _.clone(filteredByEndDate, true);
    }
};

module.exports = UserApi;
