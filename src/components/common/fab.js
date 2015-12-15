"use strict";

var React = require('react');

var Fab = React.createClass({
    propTypes: {
        icon: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,
        fabStyle: React.PropTypes.string.isRequired,
        mini: React.PropTypes.bool
    },
    getStyle: function () {
        var s;
        switch (this.props.fabStyle) {
            case "lowerR":
                s = fabStyles.lowerR;
                break;
            case "inABoxL":
                s = fabStyles.inABoxL;
                break;
            case"inABoxR":
                s = fabStyles.inABoxR;
                break;
            default:
                s = fabStyles.lowerR;
                break;
        }
        return s;
    },
    render: function () {
        var buttonClass = "mdl-button mdl-js-button mdl-button--fab mdl-button--colored";
        if (this.props.mini) {
            buttonClass += " mdl-button--mini-fab";
        }
        return (
            <button className={buttonClass}
                    style={this.getStyle()}
                    onClick={this.props.onClick}>
                <i className="material-icons">{this.props.icon}</i>
            </button>
        );
    }

});

// note: removed spinny class, as it seemed to interfere with shadow...


const fabStyles = {
    lowerR: {
        bottom: '45px',
        marginBottom: '60px',
        paddingTop: '24px',
        position: 'fixed',
        right: '150px',
        zIndex: '998'
    },
    inABoxL: {
        position: 'absolute',
        left: '25px',
        bottom: '25px'
    },
    inABoxR: {
        position: 'absolute',
        right: '25px',
        bottom: '25px'
    }
}

module.exports = Fab;