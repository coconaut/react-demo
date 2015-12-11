"use strict";

var React = require('react');
var Modal = require('react-modal');
var HeaderActions = require('../actions/headerActions');
var TextInput = require('./common/textInput');

const PAGE_TITLE = "Test Page";

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 100
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 200
    }

};

var Test = React.createClass({
    getInitialState: function () {
        return {
            modalIsOpen: false
        };
    },
    openModal: function () {
        this.setState({modalIsOpen: true});
    },
    closeModal: function () {
        this.setState({modalIsOpen: false});
    },
    componentWillMount: function () {
        HeaderActions.updatePageTitle(PAGE_TITLE);
    },
    render: function () {
        return (
            <div>
                This is a test page.
                <br />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    <h2>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>

                <button onClick={this.openModal}>
                    Open Modal
                </button>
            </div>
        );
    }
});



module.exports = Test;
