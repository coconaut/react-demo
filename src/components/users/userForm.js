"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var TextMulti = require('../common/textMulti');


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
                 <div className="mdl-cell mdl-cell--4-col">
                     <image src={this.props.user.image} style={styles.imageStyle} />
                     <input type="file" onChange={this.props.onFile} style={styles.hiddenUpload} id="hdnUpload" />
                     <button onClick={this.snagFile}
                             className="mdl-button mdl-js-button mdl-button--primary">
                         Upload
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
        width: "100%"
    },
    hiddenUpload: {
        display: 'none'
    }
};

module.exports = UserForm;
