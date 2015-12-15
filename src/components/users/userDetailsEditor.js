"use strict";

var React = require('react');
var UserForm = require('./userForm');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');


const IMAGE_PATH = "../images/";
const FIRST_NAME_ERROR = "First name must be longer than 3 characters";
const LAST_NAME_ERROR = "Last name must be longer than 3 characters";



// this is basically our stateful controller-view, with minor bending...
// used on both page and in modal
// pass in onSaveComplete for whether to navigate, close, etc.
// pass in userId for edit vs new...

var UserDetailsEditor = React.createClass({
    propTypes: {
        userId: React.PropTypes.string,
        onSaveComplete: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                description: '',
                image: IMAGE_PATH + '/noImage.jpg'
            },
            errors: {},
            origImage: '',
            newFile: null
        };
    },

    componentWillMount: function () {
        // NOTE:
        var userId = this.props.userId;
        if (userId && userId.length > 0) {
            var u = UserStore.getUserById(userId);
            var oi = u.image;
            if (u.image && u.image != "") {
                u.image = IMAGE_PATH + u.image;
            }
            this.setState({user: u, origImage: oi});
        }
    },

    userFormIsValid: function () {
        // note: could also set patterns on the mdl text inputs...

        var formIsValid = true;
        this.state.errors = {};
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
        // for now, just going back to old image
        this.state.user.image = this.state.origImage;

        // save through actions
        UserActions.updateUser(this.state.user);
        console.log('save user triggered');

        // toast

        // on complete
        this.props.onSaveComplete();
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

module.exports = UserDetailsEditor;