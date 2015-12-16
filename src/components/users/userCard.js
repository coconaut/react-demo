"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var LinkButton = require('../common/linkButton');
var UserActions = require('../../actions/userActions');

const IMAGE_PATH = "../images/";


var UserCard = React.createClass({
    propTypes: {
        user: React.PropTypes.object.isRequired
    },
    getBGStyle: function(user) {
        if (!user.image || user.image == '') {
            user.image = 'noImage.jpg';
        }
        var style = "url(" + IMAGE_PATH + user.image + ")";
        return style;
    },

    getStyle: function(user) {
        return {
            background: this.getBGStyle(user),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            paddingTop: "5px",
        }
    },
    onDelete: function(id, event) {
        event.preventDefault();
        if(confirm('Are you sure you want to delete this user?')) {
            console.log('delete triggered');
            UserActions.deleteUser(id);
        }
    },
    formatName: function(user) {
        return user.firstName + " " + user.lastName;
    },
    render: function() {
        return (
            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp"
                 style={{height: "350px", maxWidth: "350px"}}>
                <div className="mdl-card__title mdl-card--expand" style={this.getStyle(this.props.user)}>
                    <h2 className="mdl-card__title-text" style={{color: "#FFFFFF", backgroundColor: "rgba(0,0,0,0.4)" }}>{this.formatName(this.props.user)}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {this.props.user.description}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <LinkButton
                        accent={true}
                        raised={false}
                        route={`/users/${this.props.user.id}`}
                        text="Edit"
                    />
                    <button className="mdl-button mdl-js-button mdl-button--primary"
                        onClick={this.onDelete.bind(this, this.props.user.id)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
});

const styles = {
    floatR: {
        float: "right"
    }
}

module.exports = UserCard;


