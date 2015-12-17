"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var UserActions = require('../../actions/userActions');
var moment = require('moment');

// this could be opened in a FAB with magnifying glass -> maybe main FAB has + User and Search fly out of it...


const FLOATY_CLASS = "mdl-cell mdl-cell--2-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty";

var UserSearchPanel = React.createClass({
    getInitialState: function () {
        return {
            searchFields: {
                nameOfUser: "",
                startDate: moment().startOf('day').format('YYYY-MM-DD'),
                endDate: moment().startOf('day').add(1, 'days').format('YYYY-MM-DD')
            },
            errors: {}
        };
    },
    setSearchFieldState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.searchFields[field] = value;
        // trigger re-render
        this.setState({searchFields: this.state.searchFields});
    },
    onDateBlur: function (event) {
        // always forcing div to is-dirty because
        // mdl label looks poor on date input
        var name = event.target.name;
        if (this.state.searchFields[name] == "") {
            this.refs[name+'_floatyDiv'].className = FLOATY_CLASS;
        }
    },
    search: function (event) {
        event.preventDefault();
        console.log('search clicked');
        console.log(this.state.searchFields.startDate);
        UserActions.searchUsers(this.state.searchFields);
    },
    render: function () {
        return (
            <div className="mdl-card mdl-shadow--2dp"
                 style={{minHeight:"110px", width:"90%", margin: "20px", padding: "20px"}}>

                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Temp Search Test</h2>
                </div>

                <div>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--2-col">
                            <TextInput
                                name="nameOfUser"
                                label="Name"
                                onChange={this.setSearchFieldState}
                                value={this.state.searchFields.nameOfUser}
                                error={this.state.errors.nameOfUser}
                                />
                        </div>
                        <div className={FLOATY_CLASS} ref="startDate_floatyDiv">
                            <input
                                className="mdl-textfield__input"
                                id="dtStart"
                                name="startDate"
                                type="date"
                                value={this.state.searchFields.startDate}
                                onChange={this.setSearchFieldState}
                                onBlur={this.onDateBlur}
                                />
                            <label className="mdl-textfield__label" htmlFor="dtStart">
                                Start Date
                            </label>
                        </div>
                        <div className={FLOATY_CLASS} ref="endDate_floatyDiv">
                            <input
                                className="mdl-textfield__input"
                                id="dtEnd"
                                name="endDate"
                                type="date"
                                value={this.state.searchFields.endDate}
                                onChange={this.setSearchFieldState}
                                onBlur={this.onDateBlur}
                                />
                            <label className="mdl-textfield__label" htmlFor="dtEnd">
                                End Date
                            </label>
                        </div>
                        <div className="mdl-cell mdl-cell--2-col">
                            <button className="mdl-button mdl-js-button mdl-button--accent mdl-button--raised"
                                    onClick={this.search}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});


module.exports = UserSearchPanel;