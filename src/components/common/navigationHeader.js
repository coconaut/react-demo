"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var TitleStore = require('../../stores/titleStore');

const APP_TITLE = "React Demo App";
const DRAWER_TITLE = "Navigation";

var Header = React.createClass({
    getInitialState: function() {
      return {
          pageTitle: TitleStore.getTitle()
      }
    },
    _onTitleUpdate: function(){
      this.setState({pageTitle: TitleStore.getTitle()});
    },
    componentWillMount: function() {
      TitleStore.addChangeListener(this._onTitleUpdate);
    },
    componentWillUnmount: function() {
      TitleStore.removeChangeListener(this._onTitleUpdate);
    },
    render: function() {
        return (
          <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">{this.state.pageTitle}</span>
                  <div className="mdl-layout-spacer"></div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right">
                      <label className="mdl-button mdl-js-button mdl-button--icon"
                             htmlFor="fixed-header-drawer-exp">
                          <i className="material-icons">search</i>
                      </label>
                  <div className="mdl-textfield__expandable-holder">
                      <input className="mdl-textfield__input" type="text" name="sample"
                             id="fixed-header-drawer-exp" />
                  </div>
                </div>
              </div>
          </header>
        );
    }
});

var Drawer = React.createClass({
    render: function() {
        var linkClass = "mdl-navigation__link";
        return (

            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{APP_TITLE}</span>
                <nav className="mdl-navigation">
                    <Link className={linkClass} to="/">
                        <i className="material-icons"
                           role="presentation"
                           style={styles.marginR}>
                              home
                        </i>
                        Home
                    </Link>
                    <Link className={linkClass} to="/test">
                        <i className="material-icons"
                           role="presentation"
                            style={styles.marginR}>
                            airline_seat_recline_extra
                            </i>
                        Test
                    </Link>
                    <Link className={linkClass} to="/users">
                        <i
                            className="material-icons"
                            role="presentation"
                            style={styles.marginR}>
                               people
                        </i>
                        Users
                    </Link>
                    <Link className={linkClass} to="">
                        <i
                            className="material-icons"
                            role="presentation"
                            style={styles.marginR}
                            >
                            assignment
                        </i>
                        Orders
                    </Link>

                </nav>
            </div>
        );
    }
});

var styles = {
    marginR: {
        marginRight: '32px'
    }
};

//<span className="mdl-layout-title">{DRAWER_TITLE}</span>

module.exports = {
    Header: Header,
    Drawer:  Drawer
};


