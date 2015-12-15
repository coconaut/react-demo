"use strict";

var React = require('react');
var Modal = require('react-modal');
var UserDetailsEditor = require('./userDetailsEditor');

// Modal wrapper around the User Edit component
var UserModal = React.createClass({
    propTypes: {
        closeModal: React.PropTypes.func.isRequired,
        modalIsOpen: React.PropTypes.bool.isRequired
    },
    render: function () {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                style={styles.modalCustom}>
                <div>
                    <button className="mdl-button mdl-js-button mdl-button--accent  mdl-button--icon"
                            style={styles.floatR}
                            onClick={this.props.closeModal}>
                        <i className="material-icons">close</i>
                    </button>
                    <h2 className="mdl-card__title-text">Add User</h2>
                </div>
                <UserDetailsEditor onSaveComplete={this.props.closeModal}/>
            </Modal>
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
    },
    floatR: {
        float: 'right'
    }
};


module.exports = UserModal;