"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TextInput = require('../common/textInput');
var TextMulti = require('../common/textMulti');
var Uploaders = require('../common/uploaders');
var PreviewablePicUpload = Uploaders.PreviewablePicUpload;


var UserForm = React.createClass({
    propTypes: {
        user: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onFile: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function () {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <PreviewablePicUpload
                        onFile={this.props.onFile}
                        imgSource={this.props.user.image}
                        hdnUploadId="hdnUpload"
                        />
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                    <form>
                        <TextInput
                            name="firstName"
                            setFocus={true}
                            label="First Name"
                            onChange={this.props.onChange}
                            error={this.props.errors.firstName}
                            value={this.props.user.firstName}
                            />
                        <br />
                        <TextInput
                            name="lastName"
                            label="Last Name"
                            onChange={this.props.onChange}
                            error={this.props.errors.lastName}
                            value={this.props.user.lastName}
                            />
                        <br />
                        <TextMulti
                            name="description"
                            label="Description"
                            value={this.props.user.description}
                            rows={4}
                            onChange={this.props.onChange}
                            />
                        <br />
                        <input type="submit"
                               className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                               onClick={this.props.onSave} value="Save">
                        </input>
                    </form>
                </div>
            </div>
        );
    }
});


module.exports = UserForm;
