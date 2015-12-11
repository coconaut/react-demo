"use strict";

var React = require('react');
var Fab = require('./fab');

// file upload with img and set style for fab placement
var PreviewablePicUpload = React.createClass({
    propTypes: {
        onFile: React.PropTypes.func.isRequired,
        imgSource: React.PropTypes.string.isRequired,
        hdnUploadId: React.PropTypes.string.isRequired
    },
    snagFile: function (event) {
        event.preventDefault();
        var hdnUpload = document.getElementById(this.props.hdnUploadId);
        // trigger the ugo upload
        if (hdnUpload) {
            hdnUpload.click();
        }
    },
    render: function () {
        return (
            <div style={styles.rel}>
                <img src={this.props.imgSource} style={styles.imageStyle}/>
                <input type="file"
                       onChange={this.props.onFile}
                       style={styles.hiddenUpload}
                       id={this.props.hdnUploadId}/>
                <Fab
                    icon="image"
                    onClick={this.snagFile}
                    fabStyle="inABoxL"
                    />
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
    rel: {
        position: 'relative'
    }
};

module.exports = {
    PreviewablePicUpload: PreviewablePicUpload
};

