"use strict";

var React = require('react');
var Modal = require('react-modal');
var TextInput = require('../common/textInput');
var TextMulti = require('../common/textMulti');
var Uploaders = require('../common/uploaders');
var PreviewablePicUpload = Uploaders.PreviewablePicUpload;


// this may be overkill, unless we want to split this out for new user...
var UserFields = React.createClass({
    propTypes: {
        user: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function () {
        return (
            <div>
                <TextInput
                    name="firstName"
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
            </div>
        );
    }
});

// could probably use whole user form, just with an option to hide the uploader?
// then userDetails could become more like a state wrapper
// then have one page that uses the wrapper, and this modal that uses the same wrapper,
// rather than duplicate save logic?
// unless we want it very different...


var UserModal = React.createClass({
        propTypes: {
            closeModal: React.PropTypes.func.isRequired,
            modalIsOpen: React.PropTypes.bool.isRequired
        },
        getInitialState: function () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    description: '',
                    image: ''
                },
                errors: {}
            };
        },
        onSave: function() {
            console.log('save');
        },
        setUserState: function() {
            console.log('need to set state');
        },
        render: function () {
            return (
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    style={styles.modalCustom}>
                    <h2 className="mdl-card__title-text">
                        Add User
                    </h2>
                    <UserFields
                        user={this.state.user}
                        onChange={this.setUserState}
                        errors={this.state.errors}
                        />
                    <button
                        className="mdl-button mdl-js-button mdl-button--accent"
                        onClick={this.onSave}
                        >
                        Save
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--primary"
                            onClick={this.props.closeModal}>
                        Close
                    </button>
                </Modal>
            );
        }
    })
    ;

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
            <div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--4-col">
                        <PreviewablePicUpload
                            onFile={this.props.onFile}
                            imgSource={this.props.user.image}
                            hdnUploadId="hdnUpload"
                            />
                    </div>
                    <div className="mdl-cell mdl-cell--8-col">
                        <form>
                            <UserFields
                                user={this.props.user}
                                onChange={this.props.onChange}
                                errors={this.props.errors}
                                />
                            <input type="submit"
                                   className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                                   onClick={this.props.onSave} value="Save">
                            </input>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
});


const styles = {
    modalCustom: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(96,125,139, 0.45)',
            zIndex: 100
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 200,
            border: '1px solid re'
        }
    }
};


module.exports = {
    UserForm,
    UserModal

};
