"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var HeaderActions = require('../../actions/headerActions');
var UserForm = require('./userForm');
var UserStore = require('../../stores/userStore');
var UserActions = require('../../actions/userActions');

const IMAGE_PATH = "../images/";
const PAGE_TITLE = "Edit User";
const FIRST_NAME_ERROR = "First name must be longer than 3 characters";
const LAST_NAME_ERROR = "Last name must be longer than 3 characters";


var UserDetailsPage = React.createClass({
    mixins: [
      History
    ],
    getInitialState: function () {
        return {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                description: '',
                image: ''
            },
            errors: {},
            newFile: null
        };
    },
    componentWillMount: function () {
        HeaderActions.updatePageTitle(PAGE_TITLE);
        var userId = this.props.params.id;
        if (userId && userId > 0) {
            var u = UserStore.getUserById(userId);
            u.image = IMAGE_PATH + u.image;
            this.setState({user: u});
        }
    },
    userFormIsValid: function () {
        // note: could also set patterns on the mdl text inputs...

        var formIsValid = true;
        this.state.errors = {}
        // check first name
        if (this.state.user.firstName.length < 3) {
            this.state.errors.firstName = FIRST_NAME_ERROR;
            formIsValid = false;
        }

        // check last name
        if (this.state.user.lastName.length < 3) {
            this.state.errors.lastName = LAST_NAME_ERROR;
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});

        return formIsValid;
    },
    // handle changes to user form
    setUserState: function (event) {
        // find the field that changed
        var field = event.target.name;
        var value = event.target.value;
        // update state
        this.state.user[field] = value;
        // trigger re-render
        this.setState({user: this.state.user});
    },
    onFile: function(event) {
        console.log(event);
        // see if we have a file
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            var url = window.URL.createObjectURL(file);
            // update image for preview
            this.state.user.image = url;
            // update state -> hold onto file so we can save!
            this.setState({newFile: file, user: this.state.user});
        }
    },
    saveUser: function(event){
        event.preventDefault();
        if (!this.userFormIsValid()){
            return;
        }
        // need to deal with file! save and change path to just name...

        // save through actions
        UserActions.updateUser(this.state.user);
        console.log('save user triggered');

        // toast

        // navigate
        this.history.pushState(null, 'users');
    },
    render: function () {
        return (
            <div>
                <UserForm
                    user={this.state.user}
                    onSave={this.saveUser}
                    onChange={this.setUserState}
                    onFile={this.onFile}
                    errors={this.state.errors}
                    />
            </div>
        );
    }
});

module.exports = UserDetailsPage;
