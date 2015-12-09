"use strict";

var React = require('react');

var TextMulti = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        rows: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired,
        error: React.PropTypes.string
    },
    render: function () {
        var wrapperClass= "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
        if (this.props.value && this.props.value.length > 0) {
            wrapperClass += " is-dirty";
        }

        // need to add is-invalid to wrapper class...
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'is-invalid';
        }

        return (
            <div className={wrapperClass}>
                <textarea
                    className="mdl-textfield__input"
                    type="text"
                    rows={this.props.rows}
                    name={this.props.name}
                    id={this.props.name + '_textMulti'}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    >
                </textarea>
                <label className="mdl-textfield__label" htmlFor={this.props.name + '_textMulti'}>
                    {this.props.label}
                </label>
                <span className="mdl-textfield__error">{this.props.error}</span>
            </div>
        );
    }
});

module.exports = TextMulti;
