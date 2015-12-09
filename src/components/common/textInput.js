"use strict";

var React = require('react');


var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function() {
        var wrapperClass = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
        // need to deal with MDL label overlap
        if (this.props.value && this.props.value.length > 0) {
            wrapperClass += " " + 'is-dirty';
        }

        // need to add is-invalid to wrapper class...
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'is-invalid';
        }


        var inputClass = "mdl-textfield__input";
        var labelClass = "mdl-textfield__label";
        var errorClass = "mdl-textfield__error";

        return (
            <div className={wrapperClass}>
                  <input className={inputClass}
                         type="text"
                         name={this.props.name}
                         id={this.props.name + '_text'}
                         ref={this.props.name}
                         value={this.props.value}
                         onChange={this.props.onChange}
                      />
                  <label className={labelClass}
                         htmlFor={this.props.name + '_text'}>
                      {this.props.label}
                  </label>
                  <span className={errorClass}>{this.props.error}</span>
            </div>
        );
    }
});

module.exports = TextInput;
