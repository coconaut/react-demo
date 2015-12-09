// this is the top-level component / master view
// should have any menu / header / footer here
// children should be auto-populated by Router

var React = require('react');
var NavigationHeader = require('./common/navigationHeader');
var Header = NavigationHeader.Header;
var Drawer = NavigationHeader.Drawer;

// NOTE: to use material deisgn lite with React,
// be sure to wrap the top level in a plain div, not
// one with an mdl class. That causes react or react-router
// to have trouble finding the root element and remount everything...

var App = React.createClass({
   render: function() {
       return (
           <div>
               <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
               mdl-layout--fixed-header">
                   <Header />
                   <Drawer />
                   <main className="mdl-layout__content">
                       <div className="page-content">
                           {this.props.children}
                       </div>
                   </main>
               </div>
           </div>
       );
   }
});

module.exports = App;
