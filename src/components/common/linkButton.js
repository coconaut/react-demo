"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var LinkButton = React.createClass({
    propTypes: {
        route: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        raised: React.PropTypes.bool,
        accent: React.PropTypes.bool
    },
    render: function() {
        var buttonClass = "mdl-button mdl-js-button";
        buttonClass += this.props.raised ? " mdl-button--raised" : "";
        buttonClass += this.props.accent ? " mdl-button--accent" : " mdl-button--primary"
        return (
            <Link to={this.props.route}>
                <button className={buttonClass}>
                    {this.props.text}
                </button>
            </Link>
        );
    }
});

module.exports = LinkButton;

