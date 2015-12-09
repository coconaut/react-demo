"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var TextMulti = require('../common/textMulti');


// TODO:
// validate min height
// don't replace image, as you can't set it back when you don't save... maybe a ternary for new url?
// actual save when you have api going, can make ajax call as in mozilla demo
// break out the input / button combo into its own component, just get the default and new urls...


var UserForm = React.createClass({
   propTypes: {
       user: React.PropTypes.object.isRequired,
       onSave: React.PropTypes.func.isRequired,
       onChange: React.PropTypes.func.isRequired,
       onFile: React.PropTypes.func.isRequired,
       errors: React.PropTypes.object
   },
   snagFile: function(event) {
     event.preventDefault();
     var hdnUpload = document.getElementById('hdnUpload');
     // trigger the ugo upload
     if(hdnUpload){
         hdnUpload.click();
     }
   },
   render: function() {
       return (
         <div>
             <div className="mdl-grid">
                 <div className="mdl-cell mdl-cell--4-col" style={styles.rel}>
                     <img src={this.props.user.image} style={styles.imageStyle} />
                     <input type="file" onChange={this.props.onFile} style={styles.hiddenUpload} id="hdnUpload" />
                     <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                             style={styles.fab}
                             onClick={this.snagFile}>
                         <i className="material-icons">image</i>
                     </button>
                 </div>
                 <div className="mdl-cell mdl-cell--8-col">
                     <form>
                         <TextInput
                             name="firstName"
                             label="First Name"
                             onChange={this.props.onChange}
                             error={this.props.errors.firstName}
                             value={this.props.user.firstName}
                             />
                         <br />
                         <TextInput
                             name="lastName"
                             label="Last Name"
                             onChange={this.props.onChange}
                             error={this.props.errors.lastName}
                             value={this.props.user.lastName}
                             />
                         <br />
                         <TextMulti
                            name="description"
                            label="Description"
                            value={this.props.user.description}
                            rows={4}
                            onChange={this.props.onChange}
                         />
                         <br />
                         <input type="submit"
                             className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                             onClick={this.props.onSave} value="Save">

                         </input>
                     </form>
                 </div>

             </div>
         </div>
       );
   }
});

var styles = {
    imageStyle: {
        maxWidth: "100%"
    },
    hiddenUpload: {
        display: 'none'
    },

    fab: {
        position: 'absolute',
        left: '25px',
        bottom: '-25px'
    },

    rel : {
        position: 'relative'
    }
};

module.exports = UserForm;
