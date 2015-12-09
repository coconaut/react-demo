"use strict";

var React = require('react');

var Fab = React.createClass({
    propTypes: {
        icon: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired
    },
    render: function() {
        return (
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored spinny"
                  style={styles.lowerR}
              onClick={this.props.onClick}>
              <i className="material-icons">{this.props.icon}</i>
          </button>
        );
    }

});


var styles = {
    lowerR: {
        bottom: '45px',
        marginBottom:'60px',
        paddingTop: '24px',
        position: 'fixed',
        right: '150px',
        zIndex: '998'
    }
}

module.exports = Fab;