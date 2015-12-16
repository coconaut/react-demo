"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var UserActions = require('../../actions/userActions');


// should make a pretty wrapper that's standalone (for composition)
// then each page will only have a "dumb form"
// ultimately break out state, etc. to the wrapper to handle change, submit
// maybe takes an action passed in so it knows what action to call
// and then that action will update the correct store
// can we wrap a component in a component like that??


// this could be opened in a FAB with magnifying glass -> maybe main FAB has + User and Search fly out of it...

var UserSearchPanel = React.createClass({
    getInitialState: function () {
        return {
            searchFields: {
                nameOfUser: ""
            },
            errors: {}
        };
    },
    setSearchFieldState: function (event) {
        // find the field that changed
        var field = event.target.name;
        var value = event.target.value;
        // update state
        this.state.searchFields[field] = value;
        // trigger re-render
        this.setState({searchFields: this.state.searchFields});
    },
    search: function(event) {
        event.preventDefault();
        console.log('search clicked');
        UserActions.searchUsers(this.state.searchFields);
    },
    render: function () {
        return (
            <div className="mdl-card mdl-shadow--2dp" style={{minHeight:"110px", width:"90%", margin: "20px", padding: "20px"}}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Temp Search Test</h2>
                </div>
                <div>
                <TextInput
                    name="nameOfUser"
                    label="Name"
                    onChange={this.setSearchFieldState}
                    value={this.state.searchFields.nameOfUser}
                    error={this.state.errors.nameOfUser}
                    />

                    <button className="mdl-button mdl-js-button mdl-button--accent mdl-button--raised"
                        onClick={this.search}>
                        Search
                    </button>
                </div>

            </div>
        );
    }
});


module.exports = UserSearchPanel;